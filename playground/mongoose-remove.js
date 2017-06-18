const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const { Todo }  = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({}).then((result)=>console.log(result));

//Todo.findOneAndRemove();

//Todo.findByIdAndRemove('59465b3f5be30f115a4c4fd7').then((todo)=>console.log(todo));

Todo.findOneAndRemove({_id:'59465b3d5be30f115a4c4fd6'}).then((todo)=>console.log(todo));
