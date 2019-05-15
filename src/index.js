const app = require('./app');
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server listen on port ${port}`)
});

//To start db **/  C:/Users/Kenedi/mongodb/bin/mongod.exe --dbpath=C:/Users/Kenedi/mongodb_data
