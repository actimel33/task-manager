require('../src/db/mongoose')

const User = require('../src/models/user')

User.findByIdAndUpdate('5c93943d9e1f1619ecc13be9', { age: 1 })
    .then((user) => {
        console.log(user)

        return User.countDocuments({age: 1})
    })
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })