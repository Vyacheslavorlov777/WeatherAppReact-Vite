# Weather App

## Preview

![Weather App Screenshot](./public/preview.png)

A modern weather application built with React and Vite.

The app allows users to search for weather by city name, get weather using geolocation, and view a weekly forecast.

---

## Features

* Search weather by city name
* Get weather using geolocation
* Weekly weather forecast
* Loading state handling
* Error handling
* Environment variables support (`.env`)
* Responsive UI
* Custom React hooks
* CSS Modules styling

---

## Tech Stack

* React

* Vite

* CSS Modules

* OpenWeather API

* Custom Hooks

* JavaScript (ES6+)

* React 19

* Vite

* CSS Modules

* OpenWeather API

* Custom Hooks

* JavaScript (ES6+)

---

## Project Structure

```bash
src
├── assets
│   └── citys.js
├── components
│   └── Temperature.jsx
├── hooks
│   ├── useFetch.js
│   └── useWeather.js
├── services
│   └── weatherApi.js
├── styles
│   ├── App.css
│   ├── App.module.css
│   ├── index.css
│   └── Temperature.module.css
├── App.jsx
└── main.jsx
```

---

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Go to the project folder:

```bash
cd weather-app
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_KEY=your_openweather_api_key
```

You can get an API key from:

[https://openweathermap.org/api](https://openweathermap.org/api)

---

## Running the Project

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## API

The application uses the OpenWeather API for:

* Current weather
* Weekly forecast
* Geolocation weather

---

## Main Logic

### `useWeather`

Custom hook responsible for:

* weather requests
* forecast requests
* loading state
* error handling
* geolocation requests

### `weatherApi.js`

Contains all API request logic.

---

## Error Handling

The application handles:

* invalid city names
* network errors
* empty input values
* API request failures

---

## Future Improvements

* Add weather icons animations
* Add dark/light theme
* Add hourly forecast
* Add favorite cities
* Add temperature unit switch (°C / °F)
* Add search history

---

## Author

Developed as a React practice project  by Vyacheslav R.
