// Get the form element and input field
const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");

// Add an event listener to the form to handle the submit event
form.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value of the input field
    const city = cityInput.value.trim();

    // Check if the input field is not empty
    if (city) {
        // Make an API request to OpenWeatherMap to get the weather data for the city
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Display the weather data on the page
                const temperature = document.getElementById("temperature");
                temperature.textContent = `${data.main.temp}°C`;

                const description = document.getElementById("description");
                description.textContent = data.weather[0].description;

                const location = document.getElementById("location");
                location.textContent = `${data.name}, ${data.sys.country}`;
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);

                // Display an error message on the page
                const errorMessage = document.getElementById("error-message");
                errorMessage.textContent = "Error fetching weather data. Please try again.";
            });
    }
});