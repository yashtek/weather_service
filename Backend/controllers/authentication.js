const {AuthService} = require("../services");
const { success, errorResponse } = require("../utils");
class AuthController {
  constructor() {
  
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
  }

  async signup(req, res) {
    try {
      const user = await AuthService.signup(req.body);
      success(res, user, "User registered successfully", 201);
    } catch (error) {
      errorResponse(res, error.message, 500);
    }
  }
  async login(req, res) {
    try {
      const user = await AuthService.login(req.body);
      success(res, user, "User logged in successfully", 200);
    } catch (error) {
      errorResponse(res, error.message, 500);
    }
  }

  async resetPassword(req,res){
    try{
     const {password} = req.body;
     const userId = req.user.sub;

     await AuthService.resetPassword({userId,password});
     success(res,null,"Password reset successfully",200);
    }catch(error){
      errorResponse(res,error.message,500);
    }
  }
  async logout(req,res){
    return ;
  }
}

module.exports = new AuthController();
