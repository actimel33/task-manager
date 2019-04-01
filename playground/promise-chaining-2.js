require('../src/db/mongoose')

const Task = require('../src/models/task')

Task.findByIdAndDelete('5c987da0896d9d6dc0a21da9')
    .then((task) => {
        console.log(task)

        return Task.countDocuments({ done: false })
    })
    .then((result) => {
        console.log(result)
    })
    .catch(e => {
        console.log(e)
    })