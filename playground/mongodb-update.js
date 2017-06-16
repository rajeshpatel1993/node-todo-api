const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=> {
    if (err) {
        return console.log(`Unable to connect mongodb server`);
    }

    //
    // db.collection('Todos').findOneAndUpdate({
    //     _id:new ObjectID('59435a18ce1e60d0c50be809')
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>console.log(result));



    db.collection('Users').findOneAndUpdate({
        name:"anit"
    },{
        $set:{
            name:'Prakash'
        },
        $inc:{age:1}
    },{
        returnOriginal:false
    }).then((result)=>console.log(result));


    //db.close();





});
