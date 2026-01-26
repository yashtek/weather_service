const {verifyToken} = require('../utils/token');

const authenticate = (req,res,next) =>{
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({message:"Authorization header missing"});
    }

    const token = authHeader.split(' ')[1];
     if (!token) {
    return res.status(401).json({ success: false, message: 'Invalid token format' });
  }

  try{
    const decode = verifyToken(token);
    req.user = decode;
    next();
  }
  catch {
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
}

module.exports = {authenticate};