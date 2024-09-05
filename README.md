# Travel App

## Overview

The Travel App is a web application designed to help users plan their travel itineraries. It provides features for browsing destinations, viewing travel details, and managing trip plans. The application is built using Node.js, Express, and other modern web technologies.

----------------------------------------------------------------------------------------------------------------------------------

## Features
- **Home Page**: Displays a list of popular destinations.
- **Destination Details**: Provides detailed information about selected travel destinations.
- **Trip Management**: Allows users to create and manage their travel itineraries.

----------------------------------------------------------------------------------------------------------------------------------

## Technologies Used
# Frontend:
1. Sass: For styling the application.
2. Webpack: For bundling and managing frontend assets.
3. Babel: For transpiling modern JavaScript.
4. Service Worker: For enabling offline functionality and caching assets.

# Backend:
1. Express: For setting up the server and handling API requests.
2. dotenv: For managing environment variables.

# Testing:
Jest: For unit and integration testing.
Supertest: For testing HTTP requests.

# APIs:
1. Weatherbit API: To fetch weather data based on latitude and longitude obtained from the Geonames API.
2. Pixabay API: To get images for destinations or countries.
3. Geonames API: To retrieve latitude and longitude for locations.

----------------------------------------------------------------------------------------------------------------------------------

## Node Version
Ensure you are using Node.js version v20.11.1 for compatibility:
node -v

----------------------------------------------------------------------------------------------------------------------------------

## Installation

1. Clone the repository:
git clone https://github.com/NadaObaid1/Travel-App

2. Install dependencies:
npm install
Set Up Environment Variables Create a .env file in the root of your project directory with the following content:
  * PIXABAY_API_KEY=your_pixabay_key
  * WEATHERBIT_API_KEY=your_weatherbit_key
  * GEONAMES=your-Geaonnames-username

