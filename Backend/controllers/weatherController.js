const {WeatherService} = require("../services");
const { success, errorResponse } = require("../utils");

class WeatherController {
  constructor() {     
    this.getWeatherByCity = this.getWeatherByCity.bind(this);
  }

  async getWeatherByCity(req, res) {
    try {
      const { city } = req.query;

      const weatherData = await WeatherService.getWeatherByCity(city);
      success(res, weatherData, "Weather data fetched successfully", 200);
    } catch (error) {
      errorResponse(res, error.message, 500);
    }
  }
}

module.exports = new WeatherController();
