const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const { Todo }  = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '594617720a549fa07be53073';


// if(!ObjectID.isValid(id)){
//     console.log('id not valid');
// }
// Todo.find({
//     _id:id
// }).then((todos)=>{
//    console.log('todos', todos);
//
// });
//
//
// Todo.findOne({
//     _id:id
// }).then((todo)=>{
//     console.log('todo', todo);
//
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log(`Id not found`);
//     }
//     console.log('todo by id', todo);
//
// }).catch((e)=>console.log(e));


User.findById(id).then((user)=>{
    if(!user){
        return console.log(`User by that id is not available in our database`);
    }

    console.log('user by id: ', JSON.stringify(user,undefined,2));
}).catch((e)=>console.log(e));