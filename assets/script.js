var button = document.querySelector(".btn")
var inputValue = document.querySelector(".form-control")
var apiKey = "9e8abcfacac489077dd005a3537e2e90"
var city = document.querySelector(".city")
var temp = document.querySelector(".temp")
var wind = document.querySelector(".wind")
var date = document.querySelector(".date")
var humid = document.querySelector(".humid")
var icon = document.querySelector(".icon")
var forecast = document.querySelector("#forecast")
var searchHistory = [];


// populates searchHistory with what is in local storage if it exists, else does not.
if (localStorage.getItem("searchInput")) {
  searchHistory = JSON.parse(localStorage.getItem("searchInput"));
}


button.addEventListener("click", function getWeather() {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=9e8abcfacac489077dd005a3537e2e90&units=imperial")

    .then(response => response.json())
    .then(data => {
      console.log(data)


      var cityValue = data["name"]
      var tempValue = data["main"]["temp"]
      var windValue = data["wind"]["speed"]
      var humidValue = data["main"]["humidity"]
      var imgApi = 'https://openweathermap.org/img/w/'
      var searchInput = $("#formGroupExampleInput").val()
      icon.innerHTML = "<img src=" + imgApi + data.weather[0].icon + ".png alt=" + data.weather.value + ' width="50" height="50"></img>'
      city.innerHTML = "City: " + cityValue
      temp.innerHTML = "Temp: " + tempValue + " F"
      wind.innerHTML = "Wind speed: " + windValue + " mph"
      humid.innerHTML = "Humidity: " + humidValue + " %"
      

      searchHistory.push(searchInput)
      localStorage.setItem("searchInput", JSON.stringify(searchHistory))
     

      fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + inputValue.value + "&appid=9e8abcfacac489077dd005a3537e2e90&units=imperial")
        .then(response => response.json())
        .then(data => {
          console.log(data);
          for (i = 0; i < 40; i++) {
            var fCity = data.city.name;
            var fDate = data.list[i * 8].dt_txt;
            var iconcode = data.list[i * 8].weather[0].icon;
            var iconurl = "https://openweathermap.org/img/wn/" + iconcode + ".png";
            var fTemp = data.list[i * 8].main.temp;
            var fWind = data.list[i * 8].wind.speed;
            var fHumidity = data.list[i * 8].main.humidity;

            $("#fCity").html(fCity);
            $("#fDate" + i).html(fDate);
            $("#fImg" + i).html("<img src=" + iconurl + ">");
            $("#fTemp" + i).html(fTemp);
            $("#fWind" + i).html(fWind + " mph");
            $("#fHumid" + i).html("Humidity: " + fHumidity + " %");
          }
        })

    })
})




// history button sets text content of search bar
function renderSearch() {

  var history = document.querySelector("#history")
  

  history.innerHTML = ""

  for (var i = 0; i < searchHistory.length; i++) {
    var historyButton = document.createElement("button")

    historyButton.textContent = searchHistory[i]
    historyButton.classList.add("history-button")
    history.appendChild(historyButton)

    historyButton.addEventListener("click", function(){
      console.log(this)
      inputValue.value = this.textContent
    })
  }

}
renderSearch()

const day = dayjs().format('MM/DD/YYYY')
$(".today").text(day);


