const { validationResult } = require('express-validator');


const validate = async (req, res, next) =>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array().map(t=> ({field:t.param, message:t.msg}))});
    }
    
    next();
};
module.exports = {validate};
