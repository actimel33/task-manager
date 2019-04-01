const mongoose = require('mongoose')
const { isEmail } = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
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
                throw new Error('password cannot contain password!')
            }
        }
    }
})

module.exports = User;