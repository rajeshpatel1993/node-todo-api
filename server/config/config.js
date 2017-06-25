var env = process.env.NODE_ENV || 'development';


if(env === "development" || env ==="test"){
    var config = require('./config.json');
    var envConfig = config[env];
  // console.log(config.development);

   Object.keys(envConfig).forEach((key)=>{
      process.env[key] = envConfig[key];

   });

}
// if(env === "development"){
//     process.env.PORT = 3000;
//     process.env.PROD_MONGODB = 'mongodb://localhost:27017/todoapp';
// }else if(env === "test"){
//     process.env.PORT = 3000;
//     process.env.PROD_MONGODB = 'mongodb://localhost:27017/todoapptest';
// }
