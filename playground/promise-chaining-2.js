require('../src/db/mongoose')

const Task = require('../src/models/task')

// Task.findByIdAndDelete('5c987da0896d9d6dc0a21da9')
//     .then((task) => {
//         console.log(task)

//         return Task.countDocuments({ done: false })
//     })
//     .then((result) => {
//         console.log(result)
//     })
//     .catch(e => {
//         console.log(e)
//     })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });

    return count;
}

deleteTaskAndCount('5c987da0896d9d6dc0a21da9')
    .then(count => console.log(count))
    .catch(err => console.log(err))