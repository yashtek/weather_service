const { loginvalidator } = require("./login.validator");
const { passwordValidator } = require("./password.validator");
const { signupvalidator } = require("./signup.validator");
const {validate} = require("./auth.validator");
const { authenticate } = require("./auth.middleware");
const {weatherValidator} = require("./weather.validator");

module.exports ={signupvalidator,loginvalidator,passwordValidator,validate,authenticate, weatherValidator};