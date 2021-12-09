const userCtl = {};
const User = require ('../models/User');


userCtl.getUsers = async (req,res) =>  {
    const users = await User.find();  
    res.json(users);
 }

userCtl.createUser = async (req,res) => {
    const {email,password,role} = req.body;
    const newUser = new User ({email,password,role});
    await newUser.save(); 
    res.json('user created')
 }

userCtl.getUser = (req,res) => res.json(req.body);

userCtl.upDateUser = async (req,res) => {
    const{email, password,role}= req.body;
    await User.findByIdAndUpdate(req.params.id, {email, password, role});
    res.json({mes: 'update user'})
}

userCtl.deleteUser = async (req,res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json('user deleted')
}


module.exports = userCtl; 