const {userRepo} = require('../repositories');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


class AuthService {
    
  async signup({ email, password, name }) {
   
    if(await userRepo.findByEmail(email)){
      throw new Error('Email already in use');
    }
    //   Hash password before saving
    const hashpassword = await bcrypt.hash(password, 10);

    const user = await userRepo.create({
      name,
      email,
      password: hashpassword,
    });

    return {
      _id: user._id,
      name: user.name,
      email: user.email,
    };
  }


  async login({email, password}){
    const user = await userRepo.findByEmail(email);
    if(!user){
      throw new Error("Invalid email ");
    }
    const isPassword = await bcrypt.compare(password, user.password);
    if(!isPassword){
      throw new Error("Invalid password");
    }

    const token = jwt.sign(
      {
        sub:user._id,
        name:user.name,

      },
      process.env.JWT_SECRET,
      {
        expiresIn:'12h'
      }
    );

    return{
      _id: user._id,
      token,
    };
  }

  async resetPassword({userId,password}){
    const hashedPassword = await bcrypt.hash(password,10);
    const newPassword = hashedPassword;

    const updatePassword = await userRepo.findByEmailAndUpdate(userId,newPassword);

    if(!updatePassword){
      throw new Error("Unable to find User");
    }
    return true;
  }


   async logout(){
   
    return true;
  }
}

module.exports = new AuthService();
