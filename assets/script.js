// var apiKey = "9e8abcfacac489077dd005a3537e2e90"


// function getWeather( cityID ) {
//     var key = '82b1cf13e45637b15c0d309f54a04a83';
//     fetch('https://api.openweathermap.org/data/2.5/weather?lat=46.7867&lon=92.1005&appid=9e8abcfacac489077dd005a3537e2e90' + cityID+ '&appid=' + key)  
//     .then(function(resp) { return resp.json() }) 
//     .then(function(data) {
//       console.log(data);
//     })
//     .catch(function() {
//       // catch any errors
//     });
//   }
  
//   window.onload = function() {
//     weatherBalloon( 6167865 );
//   }

var button = document.querySelector(".btn")
var inputValue = document.querySelector(".form-control")
var city = document.querySelector(".city")
var temp = document.querySelector(".temp")
var wind = document.querySelector(".wind")
var humid = document.querySelector(".humid")
var icon = document.querySelector(".icon")

button.addEventListener("click", function(){
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+ inputValue.value + "&appid=9e8abcfacac489077dd005a3537e2e90&units=imperial")
.then(response => response.json())
.then(data => {
  var weatherIconCode = data.weather[0].icon
  var weatherIconUrl = `http://openweathermap.org/img/w/${weatherIconCode}.png`; 
  var weatherIcon = document.createElement('img'); 
  weatherIcon.src = weatherIconUrl; 
  document.body.appendChild(weatherIcon)
  var cityValue = data["name"]
  var tempValue = data["main"]["temp"]
  var windValue = data ["wind"]["speed"]
  var humidValue = data["main"] ["humidity"]

 
  city.innerHTML = "City: " + cityValue
  temp.innerHTML = "Temp: " + tempValue
  wind.innerHTML = "Wind speed: " + windValue
  humid.innerHTML = "% Humidity: " + humidValue
  icon.innerHTML = cityValue + icon
} )


// .catch(err => alert("Invalid city"))
})

