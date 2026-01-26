const express = require('express');
const app = express();

require('dotenv').config();
require('./db')();
const authRoutes = require('./routes/auth.routes');
const weatherRoutes = require('./routes/weather.routes');
app.use(express.json());
app.use('/api/auth',authRoutes);
app.use('/api/weather',weatherRoutes);

const port = process.env.PORT ||8000;
const startServer = async () =>{
    try{
        app.listen(port,()=>{
            console.log(`Server is running on port http://localhost:${port}`);
        });
    }catch(error){
        console.log('Error starting server:', error);
    }
}

startServer();