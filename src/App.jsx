import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import UnitToggle from './components/UnitToggle';
import WeatherCard from './components/WeatherCard';
import FavoritesList from './components/FavoritesList';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    // Load favorites from localStorage on mount
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [searchCity, setSearchCity] = useState('');
  const [unit, setUnit] = useState('metric'); // metric for Celsius, imperial for Fahrenheit
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Fetch weather data for a city
  const fetchWeatherData = async (cityName) => {
    setLoading(true);
    setError('');
    
    try {
      const url = `${BASE_URL}?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=${unit}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('City not found');
      }
      
      const data = await response.json();
      
      const weatherData = {
        city: data.name,
        country: data.sys.country,
        temperature: Math.round(data.main.temp),
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: data.weather[0].icon,
        id: data.id
      };
      
      setCurrentWeather(weatherData);
    } catch (err) {
      setError('City not found. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle search
  const handleSearch = (cityName) => {
    if (cityName.trim()) {
      fetchWeatherData(cityName.trim());
      setSearchCity(''); // Clear search input after search
    }
  };

  // Add city to favorites
  const addToFavorites = () => {
    if (currentWeather && !favorites.find(fav => fav.id === currentWeather.id)) {
      setFavorites([...favorites, currentWeather]);
    }
  };

  // Remove city from favorites
  const removeFromFavorites = (cityId) => {
    setFavorites(favorites.filter(fav => fav.id !== cityId));
  };

  // Toggle temperature unit
  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  // Update weather data when unit changes
  useEffect(() => {
    if (currentWeather) {
      fetchWeatherData(currentWeather.city);
    }
  }, [unit]);

  // Load default city on mount
  useEffect(() => {
    fetchWeatherData('Athens');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">🌤️ Weather Widget</h1>
          <p className="text-blue-100">Get current weather information for any city</p>
        </div>

        {/* Search Bar */}
        <SearchBar 
          searchCity={searchCity}
          setSearchCity={setSearchCity}
          handleSearch={handleSearch}
          loading={loading}
        />

        {/* Unit Toggle */}
        <UnitToggle 
          unit={unit}
          toggleUnit={toggleUnit}
        />

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-xl p-4 mb-6 text-red-100 text-center">
            {error}
          </div>
        )}

        {/* Current Weather */}
        {currentWeather && (
          <WeatherCard 
            weatherData={currentWeather}
            unit={unit}
            onAddToFavorites={addToFavorites}
            isInFavorites={!!favorites.find(fav => fav.id === currentWeather.id)}
          />
        )}

        {/* Favorites Section */}
        <FavoritesList 
          favorites={favorites}
          unit={unit}
          onCityClick={fetchWeatherData}
          onRemoveFromFavorites={removeFromFavorites}
        />

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-blue-100">
            Weather data provided by OpenWeatherMap API
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;