const usersCtrl = {};
 const User = require('../models/user');

//obtener todos los usuarios
 usersCtrl.getUsers = async (req,res) => {
    const users = await User.find();
    
    res.json(users);
}

//crear un nuevo usuario
usersCtrl.createUsers = async (req,res) => {
     const {username}= req.body;
    const user = new User({
        username:username,

    });
    await user.save();

    res.json({messaje:'save users'});    
}


//get one user
usersCtrl.getUser =async (req,res) => {
    const user= await User.findById(req.params.id);
    res.json(user);

}

//update one user
usersCtrl.updateUser = async (req,res) => {
    const {username} = req.body;
     await User.findByIdAndUpdate(req.params.id,{
        username:username,

    })
    res.json({messaje:'update succefull for user'})

}
//delete one user
usersCtrl.deleteUser = async(req,res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json({messaje:'delete user'})
}
module.exports = usersCtrl;