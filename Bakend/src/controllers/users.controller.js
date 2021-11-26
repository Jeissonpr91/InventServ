const usersControl = {};

const userModel = require('../models/User');

usersControl.getUsers = async(req, res) => {
    const users = await userModel.find()
    res.json(users)
}

usersControl.createUser = async(req, res) => {
    const { username } = req.body;
    const newUser = new userModel({username});
    await newUser.save();
    res.json({message: 'Usuario Creado...'})
}

usersControl.deleteUser = async(req, res) => {
    await userModel.findByIdAndDelete(req.params.id)
    res.json('Usuario Eliminado...')
}

module.exports = usersControl;