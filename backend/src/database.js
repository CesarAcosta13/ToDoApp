const mongosee = require('mongoose');

console.log(process.env.MONGODB_URI)
const URI = process.env.MONGODB_URI;

mongosee.connect(URI,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true,
});

const connection = mongosee.connection;

connection.once('open',() =>{
    console.log('conectado a mongodb');

})