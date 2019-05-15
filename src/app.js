const express = require('express');
//To start db **/  C:/Users/Kenedi/mongodb/bin/mongod.exe --dbpath=C:/Users/Kenedi/mongodb_data
require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app;