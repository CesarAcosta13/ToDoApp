const {Schema,model} = require('mongoose')

const userSchema= new Schema({
    username:{
        type:String,
        required:true,
        trim:true, //limpia los espacios en blancos
        unique:true,
    }
},{
timestamps:true, 
}
)

module.exports= model('User',userSchema);