
const apiKey = "e332266cb2f40c990ff38f9c5fce48f8";

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response) {
      alert("City not found! Please try again.");
      return;
    }

    const data = await response.json();

    document.getElementById("city").textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById("temperature").textContent = `Temperature: ${data.main.temp.toFixed(1)} Â°C`;
    document.getElementById("description").textContent = `Sky: ${data.weather[0].description}`;
    document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").textContent = `Wind: ${data.wind.speed} m/s`;

    document.getElementById("weatherResult").style.display = "block";

  } catch (error) {
    alert("Something went wrong. Check your internet connection.");
  }
}

