# Weather Widget Application

A modern, responsive React-based weather application that allows users to check current weather conditions for any city, save favorite cities, and toggle between Celsius and Fahrenheit units. The app fetches real-time weather data from the OpenWeatherMap API and persists favorite cities using localStorage.

## Features
- **Search Weather**: Enter a city name to view current weather details, including temperature, humidity, wind speed, weather description, and an icon.
- **Favorite Cities**: Add or remove cities to/from a favorites list, with data persisted across page reloads using localStorage.
- **Unit Toggle**: Switch between Celsius (°C) and Fahrenheit (°F) units for temperature and wind speed.
- **Responsive Design**: Built with Tailwind CSS for a modern, glassmorphism-style UI that adapts to various screen sizes.
- **Error Handling**: Displays user-friendly messages for invalid city names or API errors.
- **Loading States**: Shows loading indicators during API requests for a smooth user experience.

## Technologies
- **React** (v19.1.0): Frontend framework for building the user interface.
- **Vite**: Fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **OpenWeatherMap API**: Provides real-time weather data.
- **localStorage**: Persists favorite cities across sessions.
- **JavaScript (ES Modules)**: Modern JavaScript syntax for modular code.

## Setup Instructions
To run the Weather Widget Application locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd weather-widget
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the project root.
   - Add your OpenWeatherMap API key:
     ```plaintext
     VITE_OPENWEATHER_API_KEY=your-api-key
     ```
   - You can obtain an API key by signing up at [OpenWeatherMap](https://openweathermap.org/api).

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (or another port if specified).

5. **Build for Production** (optional):
   ```bash
   npm run build
   ```

6. **Preview the Build** (optional):
   ```bash
   npm run preview
   ```

## Usage
- **Search for a City**: Enter a city name in the search bar and press Enter or click the search button.
- **Add to Favorites**: Click the "Add to Favorites" button on the current weather card to save a city.
- **Remove from Favorites**: Click the "❌" button on a favorite city's card to remove it.
- **Toggle Units**: Click the unit toggle button to switch between Celsius and Fahrenheit.
- **View Favorites**: Favorite cities are displayed in a grid below the current weather, with updated weather data on click.

## Notes
- The app uses the OpenWeatherMap API, which may have rate limits on the free tier (60 calls per minute). Ensure your API key is valid to avoid errors.
- Favorite cities are stored in the browser's localStorage, so they persist across page reloads but are specific to the browser and device.
- The app is fully responsive and tested on various screen sizes.

## Credits
- Weather data provided by [OpenWeatherMap API](https://openweathermap.org/api).
- Built with love using React and Tailwind CSS. ❤️