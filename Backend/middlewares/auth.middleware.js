const userModel = require("../models/user.model");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const blackListTokenModel = require("../models/blackListToken");
const captainModel = require("../models/captain.model");

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    const isBlackListed = await blackListTokenModel.findOne({token});
    if (isBlackListed) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        req.user = user;
        return next();
    } catch (error) {
        return res.status(401).json({ error: "Unauthorized" });
    }
}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({ error: "Unauthorized" });
    }
    const isBlackListed = await blackListTokenModel.findOne({token});
    if (isBlackListed) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded.id);
        if (!captain) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        req.captain = captain;
        return next();
    } catch (error) {
        return res.status(401).json({ error: "Unauthorized" });
    }
}