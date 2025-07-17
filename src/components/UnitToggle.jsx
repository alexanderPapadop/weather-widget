import React from 'react';

const UnitToggle = ({ unit, toggleUnit }) => {
  const getCurrentUnit = () => {
    return unit === 'metric' ? '°C' : '°F';
  };

  const getNextUnit = () => {
    return unit === 'metric' ? '°F' : '°C';
  };

  return (
    <div className="flex justify-center mb-6">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-1 shadow-lg">
        <button
          onClick={toggleUnit}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 text-white font-medium hover:bg-white/30 transition-all duration-200"
        >
          <span className="text-lg">{getCurrentUnit()}</span>
          <span className="text-sm opacity-75">
            Switch to {getNextUnit()}
          </span>
        </button>
      </div>
    </div>
  );
};

export default UnitToggle;