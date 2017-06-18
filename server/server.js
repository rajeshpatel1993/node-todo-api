var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose}  = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    //console.log(req.body);

    var todo = new Todo({
        text:req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });

});


app.get('/todos',(req,res)=>{
   Todo.find().then((todos)=>{
       res.send({todos});
   },(err)=>{
       res.status(400).send(e);
   })
});



app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;
    //valid id is using isValid();
    //error with 404
    if(!ObjectID.isValid(id)){
        return res.status(404).send('not a valid id');
    }

    Todo.findById(id).then((todo)=>{
        if(!todo){
           return res.status(404).send('Todo not exit');
        }
        res.status(200).send({todo});
    }).catch((e)=>res.status(400).send());

});


app.delete('/todos/:id',(req,res)=>{
   var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send('Not a valid id');
    }

    Todo.findByIdAndRemove(id).then((todo)=>{
       if(!todo){
           return res.status(404).send('Not a valid todo');
       }
       res.status(200).send(todo);
    }).catch((e)=>res.status(400).send());
});
app.listen(port,()=>{
    console.log(`Starting on port ${port}`);
});

module.exports = {
    app
};