const getCoordinatesForLocation = async (destination) => {
  const response = await fetch(
    `http://api.geonames.org/searchJSON?q=${destination}&maxRows=10&username=nadaobaid`
  );
  if (!response.ok) {
    throw new Error(`GeoNames API error: ${response.status}`);
  }
  const data = await response.json();
  if (data.geonames && data.geonames.length > 0) {
    const { lat, lng, countryName } = data.geonames[0];
    return { lat, lng, countryName };
  } else {
    throw new Error("Location not found");
  }
};

const getWeatherForecast = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=9de10751753948a4aab3fd9d460d8d9a`
    );
    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

const getImageForLocation = async (destination) => {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=45728354-72bcbce601750fc20e98c30c9&q=${encodeURIComponent(
        destination
      )}&image_type=photo`
    );
    if (!response.ok) {
      throw new Error(`Pixabay API error: ${response.status}`);
    }
    const data = await response.json();
    if (data.hits.length > 0) {
      return data.hits[0].webformatURL;
    } else {
      return "default_image_url";
    }
  } catch (error) {
    console.error("Error fetching image:", error);
    throw error;
  }
};

const calculateDaysUntilTrip = (startDate) => {
  const tripDate = new Date(startDate);
  const today = new Date();
  const timeDifference = tripDate - today;
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return daysRemaining;
};

const calculateTripDays = (tripStart, tripEnd) => {
  const start = new Date(tripStart);
  const end = new Date(tripEnd);
  const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  return duration;
};

const renderTripDetails = (
  locationData,
  weatherInfo,
  locationImage,
  tripStart,
  tripEnd,
  tripDuration
) => {
  const tripDetailsDiv = document.getElementById("trip-info");
  const daysUntilTrip = calculateDaysUntilTrip(tripStart);

  tripDetailsDiv.innerHTML = `
      <h2>Trip to ${locationData.countryName}</h2>
      <img src="${locationImage}" alt="${locationData.countryName}" class="trip-img">
      <p>Trip Start Date: ${tripStart}</p>
      <p>Trip End Date: ${tripEnd}</p>
      <p>Days until the trip starts: ${daysUntilTrip}</p>
      <p>Trip Duration: ${tripDuration} days</p>
      <p>Weather Forecast: ${weatherInfo.data[0].temp}°C, ${weatherInfo.data[0].weather.description}</p>
    `;
};

export {
  getCoordinatesForLocation,
  getWeatherForecast,
  getImageForLocation,
  renderTripDetails,
  calculateTripDays,
};
