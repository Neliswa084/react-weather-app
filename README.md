# React Weather App

A weather application built with React and TypeScript that shows real-time weather conditions, hourly and daily forecasts, saved locations, dark mode, and offline support — all in one place.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- An OpenWeatherMap API key — [openweathermap.org](https://openweathermap.org/api)
- A Visual Crossing API key — [visualcrossing.com](https://www.visualcrossing.com/weather-api)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd react-weather-app

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root of the project and add your API keys:

```env
VITE_WEATHER_API_KEY=your_openweather_api_key
VITE_FORECAST_API_KEY=your_visual_crossing_api_key
```

### Running the App

```bash
npm run dev
```

The app runs at **http://localhost:5173**

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 + TypeScript | UI and component logic |
| Vite | Build tool and dev server |
| React Router v6 | Client-side navigation |
| OpenWeatherMap API | Current weather data |
| Visual Crossing API | Hourly and 7-day forecast data |
| CSS Modules | Component-scoped styling |
| localStorage | Saved locations and offline cache |

---

## 📁 Project Structure

```
├── src/
│   ├── Components/
│   │   ├── CurrentWeather/       # Current temperature, condition, icon
│   │   ├── WeatherDetails/       # Humidity, wind speed, feels like
│   │   ├── WeatherForecast/
│   │   │   ├── ForecastTabs/     # Hourly / Daily tab switcher
│   │   │   ├── HourlyForecast/   # Today's hour-by-hour forecast
│   │   │   └── DailyForecast/    # 7-day forecast
│   │   ├── SavedLocation/        # Saved cities list and cards
│   │   ├── Search/               # City search bar
│   │   ├── Navbar/               # Top nav with dark mode and units toggle
│   │   ├── DarkModeToggle/       # Light/dark theme toggle
│   │   ├── TempToggle/           # Celsius / Fahrenheit toggle
│   │   ├── Type/                 # TypeScript interfaces (WeatherProps, ForecastProps)
│   │   ├── Card/                 # Reusable card component
│   │   └── Text/                 # Reusable text component
│   ├── pages/
│   │   ├── SearchPage.tsx        # Home — search for a city
│   │   ├── WeatherPage.tsx       # Weather results for a city or coordinates
│   │   ├── SettingsPage.tsx      # Theme and units settings
│   │   └── NotFound.tsx          # 404 page
│   ├── App.tsx                   # Route definitions and global state
│   └── main.tsx                  # App entry point
├── .env                          # API keys (not committed to git)
├── package.json
├── tsconfig.json
└── README.md
```

---

## ✨ Features

**Weather Data**
- Search by city name or GPS coordinates (lat,lon)
- Current weather: temperature, condition, icon, humidity, wind speed, feels like
- Hourly forecast for today (from Visual Crossing)
- 7-day daily forecast with min/max temperatures

**User Experience**
- Dark mode toggle (light/dark theme applied across the whole app)
- Celsius / Fahrenheit temperature toggle
- Saved locations — cities are automatically saved to localStorage when you view them
- Settings page for changing theme and units

**Offline Support**
- Weather data is cached to localStorage after every successful fetch
- If you go offline, the app loads the last saved data and shows an offline banner

**Weather Alerts**
- Browser notifications for severe weather conditions (storm, thunder, tornado, hurricane, etc.)
- Requires notification permission to be granted in the browser

---

## 🔗 Pages

| Route | Page | Description |
|---|---|---|
| `/` | Search Page | Search for any city by name |
| `/weather/:city` | Weather Page | Full weather view for that city |
| `/settings` | Settings | Change theme and temperature units |
| `*` | Not Found | 404 page for unknown routes |

---

## 🌐 APIs Used

### OpenWeatherMap
- Endpoint: `https://api.openweathermap.org/data/2.5/weather`
- Used for: current weather conditions, temperature, humidity, wind, icon
- Supports city name and lat/lon coordinates

### Visual Crossing
- Endpoint: `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/:city`
- Used for: hourly forecast (today) and 7-day daily forecast

---

## ⚠️ Notes

- Keep your `.env` file out of version control — add it to `.gitignore`
- API keys are free on both OpenWeatherMap and Visual Crossing for personal use
- Saved locations and cached weather data are stored in your browser's localStorage
