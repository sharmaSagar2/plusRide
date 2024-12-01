const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,"first name must be at least 3 characters long"]
        },
        lastname:{
            type:String,
            minlength:[3,"last name must be at least 3 characters long"]
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,"Please enter a valid email"]
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,"color must be at least 3 characters long"],
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,"plate must be at least 3 characters long"],
        },
        capacity:{
            type:Number,
            required:true,
            minlength:[1,"capacity must be at least 1 characters long"],
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto'],
        }
    },
    location:{
        lat:{
            type:Number,
        },
        lng:{
            type:Number,
        }
    }
        
})
captainSchema.methods.generateAuthToken = async function(){
    try{
        const token =  jwt.sign({id: this._id}, process.env.JWT_SECRET, { expiresIn: '30d' });
        return token;
    }catch(err){
        console.log(err);
    }
} 
captainSchema.methods.comparePassword = async function(password){
    return  bcrypt.compareSync(password, this.password);
}
captainSchema.statics.hashPassword = async function(password){
    return bcrypt.hashSync(password, 10);
}
const captainModel = mongoose.model("captain",captainSchema);
module.exports = captainModel;
