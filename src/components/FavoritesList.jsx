import React from 'react';
import FavoritesWeatherCard from './FavoritesWeatherCard';

const FavoritesList = ({ 
  favorites, 
  unit, 
  onCityClick, 
  onRemoveFromFavorites 
}) => {
  // Don't render if no favorites
  if (!favorites || favorites.length === 0) {
    return null;
  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">
        ❤️ Favorite Cities ({favorites.length})
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((favorite) => (
          <FavoritesWeatherCard
            key={favorite.id}
            favoriteData={favorite}
            unit={unit}
            onCityClick={onCityClick}
            onRemoveFromFavorites={onRemoveFromFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;