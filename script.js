async function getWeather() {

    const city = document.getElementById("cityInput").value;

    if(city === ""){
        alert("Please enter a city name");
        return;
    }

    const apiKey = "c6d29a0ff3f445d6b8900648261605";

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        document.getElementById("weatherCard").style.display = "block";

        document.getElementById("cityName").innerText =
            data.location.name + ", " + data.location.country;

        document.getElementById("temp").innerText =
            data.current.temp_c + "°C";

        document.getElementById("condition").innerText =
            data.current.condition.text;

        document.getElementById("humidity").innerText =
            data.current.humidity;

        document.getElementById("wind").innerText =
            data.current.wind_kph;

        document.getElementById("weatherIcon").src =
            "https:" + data.current.condition.icon;

    } catch(error) {

        alert("City not found!");

        console.log(error);
    }
}