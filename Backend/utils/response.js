const success = (res, data = null, message = 'Success', statusCode = 200) => {
    return res.status(statusCode).json({
        success:true,
        message,
        data
    });
};

const errorResponse = (res,message='Something went wrong', statusCode=500) => {
    return res.status(statusCode).json({
        success:false,
        message,
    });
};

const notFound = (res, message='Resource not found') => {
    return res.status(404).json({
        success:false,
        message,
    });
};

const badRequest = (res, message='Bad request') => {
    return res.status(400).json({
        success:false,
        message,
    });
};

const unauthorized = (res, message='Unauthorized') => {
    return res.status(401).json({
        success:false,
        message,
    });
};


module.exports = {
    success,
    errorResponse,
    notFound,
    badRequest,
    unauthorized
}