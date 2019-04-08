const express = require('express');
//To start db **/  C:/Users/Kenedi/mongodb/bin/mongod.exe --dbpath=C:/Users/Kenedi/mongodb_data
require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
    
//     return res.status(503).send('Requests are disabled!');
// });
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(`Server listen on port ${port}`)
});

const jwt = require('jsonwebtoken');

const myFunc = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days'});
    console.log(token)

    const valid = jwt.verify(token, 'thisismynewcourse')
    console.log(valid)
}

myFunc()