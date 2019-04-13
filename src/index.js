const express = require('express');
//To start db **/  C:/Users/Kenedi/mongodb/bin/mongod.exe --dbpath=C:/Users/Kenedi/mongodb_data
require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(`Server listen on port ${port}`)
});
