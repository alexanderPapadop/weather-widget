import React from 'react';

const WeatherCard = ({ 
  weatherData, 
  unit, 
  onAddToFavorites, 
  isInFavorites 
}) => {
  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  const getTemperatureUnit = () => {
    return unit === 'metric' ? '°C' : '°F';
  };

  const getWindSpeedUnit = () => {
    return unit === 'metric' ? 'm/s' : 'mph';
  };

  if (!weatherData) {
    return null;
  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">Current Weather</h2>
        <button
          onClick={onAddToFavorites}
          className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-all duration-200 disabled:opacity-50"
          disabled={isInFavorites}
        >
          {isInFavorites ? '❤️ Added' : '🤍 Add to Favorites'}
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <img
              src={getWeatherIcon(weatherData.icon)}
              alt={weatherData.description}
              className="w-20 h-20"
            />
          </div>
          <h3 className="text-3xl font-bold text-white mb-1">
            {weatherData.city}, {weatherData.country}
          </h3>
          <p className="text-5xl font-bold text-white mb-2">
            {weatherData.temperature}{getTemperatureUnit()}
          </p>
          <p className="text-xl text-blue-100 capitalize">
            {weatherData.description}
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-blue-100 mb-1">💧 Humidity</p>
            <p className="text-2xl font-bold text-white">{weatherData.humidity}%</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-blue-100 mb-1">💨 Wind Speed</p>
            <p className="text-2xl font-bold text-white">
              {weatherData.windSpeed} {getWindSpeedUnit()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;