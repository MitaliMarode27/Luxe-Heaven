import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  fname : {
    type: String,  
    require: true
  },
  email : {
    type:String,
    require: true
  },
  phone : {
    type: Number,
    require: true
  },
  password : {
    type: String,
    require: true
  },
  propertyName : {  
    type:String,
    require: true
  },
  isAdmin:{
    type: Boolean,
    default : false
  }
});

userSchema.pre('save', async function(next){
     const user = this;
     if(!user.isModified('password')){
      next();
     }

     try{
      const saltRound = await bcrypt.genSalt(10);
      const hash_password = await bcrypt.hash(user.password, saltRound);
      user.password = hash_password
     }
     catch(err){
       next(err)
     }
})

userSchema.methods.generateToken = async function() {
    try {
      return jwt.sign({
        fname: this.fname.toString(),
        email: this.email,
        isAdmin : this.isAdmin,
      },
    )
    } catch (error) {
      console.error(error);
      
    }
}

const User = new mongoose.model("User",userSchema);

export default User;