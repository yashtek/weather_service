const Redis = require('ioredis');


const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    

});

redis.on('connect',()=>{
    console.log("redis connected successfully");
});

redis.on('error',(err)=>{
    console.log("Redis connection error:",err);
});

module.exports = {redis};

