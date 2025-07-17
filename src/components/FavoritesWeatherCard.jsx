import React from 'react';

const FavoritesWeatherCard = ({ 
  favoriteData, 
  unit, 
  onCityClick, 
  onRemoveFromFavorites 
}) => {
  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  const getTemperatureUnit = () => {
    return unit === 'metric' ? '°C' : '°F';
  };

  const handleCardClick = () => {
    onCityClick(favoriteData.city);
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    onRemoveFromFavorites(favoriteData.id);
  };

  return (
    <div
      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-200 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-white">{favoriteData.city}</h3>
        <button
          onClick={handleRemoveClick}
          className="text-red-400 hover:text-red-300 transition-colors duration-200"
          title="Remove from favorites"
        >
          ❌
        </button>
      </div>
      
      <div className="flex items-center gap-2">
        <img
          src={getWeatherIcon(favoriteData.icon)}
          alt={favoriteData.description}
          className="w-10 h-10"
        />
        <div>
          <p className="text-xl font-bold text-white">
            {favoriteData.temperature}{getTemperatureUnit()}
          </p>
          <p className="text-blue-100 text-sm capitalize">
            {favoriteData.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FavoritesWeatherCard;