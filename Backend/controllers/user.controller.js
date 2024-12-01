const userModel = require("../models/user.model");

const userService = require("../services/user.service");
const {validationResult} = require("express-validator");
const blackListTokenModel = require("../models/blackListToken");
module.exports.registerUser = async (req, res) => {
    console.log("in controller");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {fullname,email,password} = req.body;
    const isUserAlreadyExist = await userModel.findOne({email});
    if(isUserAlreadyExist){
        return res.status(400).json({message:"User already exist"})
    }

    const hashPassword = await userModel.hashPassword(password);
    const user = await userService.createUser({
        fullname,
        email,
        password:hashPassword
    });
    const token = await user.generateAuthToken();
    res.status(201).json({user,token});
}
module.exports.loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {email,password} = req.body;
    const user = await userModel.findOne({email}).select("+password");
    if(!user){
        return res.status(401).json({error:"Invalid email or password"});
    }
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({error:"Invalid credentials"});
    }
    const token = await user.generateAuthToken();
    
    res.cookie("token",token);
    res.status(200).json({user,token});
}
module.exports.getUserProfile = async (req, res) => {
    const user = req.user;
    res.status(200).json(user);
    
}
module.exports.logoutUser = async (req, res) => {
    res.clearCookie("token");
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    await blackListTokenModel.create({token});
    res.status(200).json({message:"User logged out successfully"});
}
