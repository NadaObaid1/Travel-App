import "./styles/main.scss";
import "./styles/navbar.scss";
import "./styles/footer.scss";
import {
  getCoordinatesForLocation,
  getWeatherForecast,
  getImageForLocation,
  renderTripDetails,
  calculateTripDays,
} from "./js/app";

document.getElementById("travel-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const location = document.getElementById("location").value;
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;

  try {
    const coordinates = await getCoordinatesForLocation(location);
    const weather = await getWeatherForecast(coordinates.lat, coordinates.lng);
    const image = await getImageForLocation(location);

    const tripDuration = calculateTripDays(startDate, endDate);
    renderTripDetails(
      coordinates,
      weather,
      image,
      startDate,
      endDate,
      tripDuration
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("Failed to fetch data. Please check your input or try again later.");
  }
});
