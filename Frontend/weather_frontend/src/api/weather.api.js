const API_BASE_URL= 'http://localhost:8000/api';

export const getWeatherByCity = async (city) =>{
    const response = await fetch(`${API_BASE_URL}/weather/current?city=${encodeURIComponent(city)}`);

    if(!response.ok){
        throw new Error('Failed to fetch weather data');
    }
    const result = await response.json();
    return result.data;

}
