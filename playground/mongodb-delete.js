const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=> {
    if (err) {
        return console.log(`Unable to connect mongodb server`);
    }

   // db.collection('Todos').deleteMany({text:'Each lunch'}).then((result)=>{
   //     console.log(result);
   // });

    //db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>console.log(result));


    //db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>console.log(result));

    //db.close();





});
