const userModel = require("../models/user.model");


module.exports.createUser = async ({fullname,email,password}) => {
    console.log(fullname);       
    if(!fullname || !email || !password){
        throw new Error("Please fill all the fields");
        }
        const user = userModel.create({
            fullname:{
                firstname:fullname.firstname,
                lastname:fullname.lastname
            },
            email,  
            password
        })
        return user;
   
};  

