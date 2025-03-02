async function getWeather() {
	const location = document.getElementById('location').value;
	if (!location) {
		alert("Please enter a location");
		return;
	}
	
	const apiKey = 'cb6538f8a8fc4df1be492634250201';
	const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;
	
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('Location not found');
		}
		const data = await response.json();
		document.getElementById('result').innerHTML = `
			<h3>Weather Report for ${data.location.name}, ${data.location.country}</h3>
			<p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
			<p><strong>Condition:</strong> ${data.current.condition.text}</p>
			<p><strong>Humidity:</strong> ${data.current.humidity}%</p>
			<p><strong>Wind Speed:</strong> ${data.current.wind_kph} kph</p>
			<p><strong>Feels Like:</strong> ${data.current.feelslike_c}°C</p>
		`;
	} catch (error) {
		document.getElementById('result').innerText = 'Error: ' + error.message;
	}
}