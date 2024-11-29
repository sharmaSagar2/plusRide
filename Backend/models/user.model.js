const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
   fullname:{
    firstname:{
        type:String,
        required:true,
        minlength:[3,"first name must be at least 3 characters long"]
    },
    lastname:{
        type:String,
        required:true,
        minlength:[3,"last name must be at least 3 characters long"]
    }
   },
   email:{
    type:String,
    required:true,
    unique:true,
    minlength:[6,"email must be at least 6 characters long"]
   },
   password:{
    type:String,
    required:true,
    select:false
   },
   socketId:{
    type:String,
   },
});
userSchema.methods.generateAuthToken = async function(){
    try{
        const token = jwt.sign({id: this._id}, process.env.JWT_SECRET);
        await this.save();
        return token;
    }catch(err){
        console.log(err);    
    }
}
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}   

userSchema.statics.hashPassword = async function(password){
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}




const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
