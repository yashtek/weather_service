const mongoose =require('mongoose');
const connectdb = async()=>{
    try{
        await mongoose.connect(process.env.MONGOURL)
        console.log('Database connected successfully');
    }catch(error){
        console.log('Database connection error:', error);
    }
}
module.exports=connectdb;