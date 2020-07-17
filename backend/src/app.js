const express = require('express');
const cors = require('cors');
const app = express();
require(tpath)


//settings
app.set('port', process.env.PORT || 4000);

if(process.env.NODE_ENV=='production'){
    //set static folder
    app.use(express.static('frontend/build'));

    app.get('*',(req,res)=>{

    })

}



//middleweres
app.use(cors());
app.use(express.json());



//routers 
app.use('/api/users', require('./routes/users'));
app.use('/api/notes',require('./routes/notes'));



module.exports =app;