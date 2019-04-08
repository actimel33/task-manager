const mongoose = require('mongoose')

const bcrypt = require('bcryptjs');

const taskSchema = mongoose.Schema({
    description: {
        type: String,
        require: true,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    }
});

//middleware erase before save;
taskSchema.pre('save', async function(next) {

    next();
});

const Task = mongoose.model('Task', taskSchema)

module.exports = Task