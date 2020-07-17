const {Schema, model} = require('mongoose')

const noteSchema =new Schema({
    title:String,
    content:{
        type: String,
        //required: true,
    },
    author: String,
    date:{
        type: Date,
        default:Date.now,
    },
}, {
    timestamps: true, //aqui agrego fecha de creacion de la nota y de actualizaacion

}
)

module.exports= model('Note',noteSchema);

