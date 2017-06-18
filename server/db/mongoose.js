const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.PROD_MONGODB || 'mongodb://localhost:27017/TodoApp');
module.exports = {
    mongoose
};



//heroku config:set PROD_MONGODB=mongodb://rajesh:8120243034@ds131492.mlab.com:31492/todoapp
