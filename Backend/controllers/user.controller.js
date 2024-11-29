const userModel = require("../models/user.model");

const userService = require("../services/user.service");
const {validationResult} = require("express-validator");

module.exports.registerUser = async (req, res) => {
    console.log("in controller");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {fullname,email,password} = req.body;
    console.log(req.body); 
    const hashPassword = await userModel.hashPassword(password);
    const user = await userService.createUser({
        fullname,
        email,
        password:hashPassword
    });
    const token = await user.generateAuthToken();
    res.status(201).json({user,token});
}