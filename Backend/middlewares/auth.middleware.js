const userModel = require("../models/user.model");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    const isBlackListed = await userModel.findOne({token});
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
    