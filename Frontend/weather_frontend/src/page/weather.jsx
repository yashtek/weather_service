
import Weathercard from "../component/weatherCard";
import { useState } from "react";
import { getWeatherByCity } from "../api/weather.api";

export default function WeatherPage() {
  
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async()=>{
    try{
      setError("");
      if(!city.trim()){
        setError("Please enter a city name");
        return;
      }
      const data = await getWeatherByCity(city);
      setWeatherData(data);
    }catch(err){
      console.error('Error fetching weather data:', err);
      setError('Failed to fetch weather data. Please try again.');
      setWeatherData(null);
    }
  };
  return (
    <div className="bg-gradient-to-b from-[#322A9B] to-[#5764C7] border min-h-screen overflow-hidden">
      <h1 className=" text-6xl font-bold text-center pt-10 text-[#C2ABA3] mt-10">
        Weather Service
      </h1>

      <div className="flex justify-center mt-10">
        <div className=" mt-20 border bg-[#A0AAD9] h-[350px] w-[600px] shadow-2xl rounded-3xl border-0  ">
          <h3 className=" font-['Arial'] text-2xl font-bold text-center text-[#002BEB] mt-2 ">
            Find your city weather information now{" "}
          </h3>
          <div className="border-b-2 border-gray-500 rounder-full  mx-30 "></div>
          <p className=" font-['Arial'] mt-2 text-xl font-medium text-center text-[#000000]  ">
            Enter your City
          </p>

          <input
            className="w-[550px] border-2 outline-none border-gray-600 focus:ring-0 rounded-md p-3 my-5 mx-6   placeholder:text-gray-800 placeholder:text-md placeholder:font-semibold  transition-all duration-300
             focus:border-gray-500 focus:shadow-2xl"
            required
            type="search"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            placeholder="Here..."
            
          />

          <div className="flex justify-center">
            <button onClick={handleSearch} className=" bg-[#322A9B] text-white font-['Arial'] font-bold text-lg rounded-md px-6 py-2 hover:bg-[#5764C7] hover:shadow-lg hover:scale-105 transition-all duration-300 ">
              Search
            </button>
          </div>
          {error && <p className="text-red-600 text-center mt-3 font-semibold">{error}</p>}
           <Weathercard data={weatherData}/>
         </div>
        
      </div>

      <footer className="text-center text-white py-4">
        © 2024 Weather Service. All rights reserved. By: Yash Sharma
      </footer>
    </div>
  );
}
