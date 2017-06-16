const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=> {
    if (err) {
        return console.log(`Unable to connect mongodb server`);
    }

   // console.log(`Connected to mongodb server`);


    // db.collection('Todos').find({
    //     _id:new ObjectID('59432babce1e60d0c50be804')
    // }).toArray().then((docs)=> {
    //
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log(`Unable to fetch ToDos  ${err}`);
    // });


    db.collection('Todos').find().count().then((count)=> {

        console.log('No of todos');
        console.log(JSON.stringify(count,undefined,2));
    },(err)=>{
        console.log(`Unable to fetch ToDos  ${err}`);
    });

});
