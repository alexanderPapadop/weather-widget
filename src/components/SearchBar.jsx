import React from 'react';

const SearchBar = ({ searchCity, setSearchCity, handleSearch, loading }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    if (searchCity.trim()) {
      handleSearch(searchCity.trim());
    }
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6 shadow-lg">
      <form onSubmit={onSubmit}>
        <div className="flex gap-4">
          <input
            type="text"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            onKeyPress={onKeyPress}
            placeholder="Enter city name..."
            className="flex-1 px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !searchCity.trim()}
            className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl text-white font-medium hover:bg-white/30 transition-all duration-200 disabled:opacity-50"
          >
            {loading ? '🔄' : '🔍'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;