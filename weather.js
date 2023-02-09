const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd694485ed8msh537dc3e2f5e96c6p109ff2jsn9301f4e068a6',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));