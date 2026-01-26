const User = require("../models/user");

class userRepo{
    findByEmail(email){
        return User.findOne({email});

    }
    create(Userdata){
        return User.create(Userdata);
    }

    findByEmailAndUpdate(UserId,newPassword){
        return User.findByIdAndUpdate(
          UserId,
            {
               $set: { password:newPassword }
            },
            {new:true}
        );
    }
}



module.exports = new userRepo();