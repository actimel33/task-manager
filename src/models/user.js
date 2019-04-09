const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { isEmail } = require('validator');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        trim: true,
        lowercase: true,
        validate(val) {
            if (!isEmail(val)) {
                throw new Error('Must provide valid email!')
            }
        }
    },
    age: {
        type: Number,
        default: 18,
        min: 18
    },
    password: {
        type: String,
        require: true,
        minlength: 7,
        trim: true,
        validate(val) {
            if (val.toLowerCase().includes('password')) {
                throw new Error('password cannot contain "password!"')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            require: true
        }
    }]
})

//create a method on individual instance
userSchema.methods.toJSON = function() {
    const user = this;

    const userObject = user.toObject();

    delete userObject.password;
    delete userObject.tokens;

    return userObject;
};

userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse');

    user.tokens =  user.tokens.concat({ token });
    await user.save();

    return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Unable to login!');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error('Unable to login!');
    }

    return user;
}

//Hash the plain text password before saving
userSchema.pre('save', async function(next) {
    const user = this;

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;