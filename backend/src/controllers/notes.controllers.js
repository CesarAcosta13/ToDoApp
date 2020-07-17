const notesCrtl = {};
const Note = require('../models/note');

//obtine todas las notas
notesCrtl.getNotes= async(req,res) => {
    const notes = await Note.find(); //devuelve todos las notas
    res.json(notes)
}

//crea una note
notesCrtl.createNotes = async(req,res) => {
   const {title, content ,date, author} = req.body;
   
   const newNote = new Note ({
       title: title,
       content:content,
       date:date,
       author:author,
    });
   
    await newNote.save();
   res.json({message: "note save"});
}


//obtengo una nota por id
notesCrtl.getNote = async (req,res) =>{ 
    const note = await Note.findById(req.params.id);
    res.json(note)
}

//update one note
notesCrtl.updateNote = async (req,res) =>{
   const {title,description,date,author} =req.body;
    await Note.findOneAndUpdate (req.params.id,{
    title,
    description,
    date,
    author,
   });


    res.json({message:'update succesfull'})
}


    //delete one note
notesCrtl.deleteNote = async (req,res) => {
    const note= await Note.findByIdAndDelete(req.params.id)
    res.json({message:'delete succefull'});
}

//export module
module.exports = notesCrtl;


