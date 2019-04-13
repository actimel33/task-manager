const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    description: {
        type: String,
        require: true,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    }
}, {
    timestamps: true
});

//middleware erase before save;
taskSchema.pre('save', async function(next) {

    next();
});

const Task = mongoose.model('Task', taskSchema)

module.exports = Task