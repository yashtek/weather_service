    const axios = require('axios');
    const {redis} = require('../config/redis');
    const WEATHER_TTL = 10*60; // 10 minutes

    class weatherService {
        constructor(redis){
            this.redis = redis;
        }

        async getWeatherByCity(city){
            if(!city){
                throw new Error("City is required");
            }

            const cacheKey = `weather:${city.toLowerCase()}`;

            const cache = await this.redis.get(cacheKey);
            if(cache){
                return JSON.parse(cache);
            }

            const response = await axios.get(process.env.WEATHER_URL ,{
                params:{
                    q:city,
                    appid: process.env.WEATHER_API_KEY,
                    units:'metric'
                },
            
            });


            const weatherData = {
                city:response.data.name,
                temperature:response.data.main.temp,
                feeldLike:response.data.main.feels_like,
                humidity:response.data.main.humidity,
                weather:response.data.weather[0].description,
            };


            await this.redis.set(cacheKey,JSON.stringify(weatherData),'EX',WEATHER_TTL);
            return weatherData;
            
        }
    }

    module.exports = new weatherService(redis);