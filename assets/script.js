var button = document.querySelector(".btn")
var inputValue = document.querySelector(".form-control")
var apiKey = "9e8abcfacac489077dd005a3537e2e90"
var city = document.querySelector(".city")
var temp = document.querySelector(".temp")
var wind = document.querySelector(".wind")
var date = document.querySelector(".date")
var humid = document.querySelector(".humid")
var icon = document.querySelector(".icon")
var forecast = document.querySelector(".forecast")
var colOne = document.querySelector(".col1")
var searchHistory = [];
    



button.addEventListener("click", function(){
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+ inputValue.value + "&appid=9e8abcfacac489077dd005a3537e2e90&units=imperial",{
    method: "GET"
    
  })
.then(response => response.json())
.then(data => {console.log(data) 
  // response = requests.get(url)
  
  
  // var icon= response.weather[0].icon;
  // var iconurl="https://openweathermap.org/img/wn/"+icon +"@2x.png";
  
  var cityValue = data["name"]
  var tempValue = data["main"]["temp"]
  var windValue = data ["wind"]["speed"]
  var humidValue = data["main"]["humidity"]
  var dateValue = data["main"]["dt_text"]
  var iconValue = data.weather[0].icon
  var searchInput = $("#formGroupExampleInput").val()
 
  city.innerHTML = "City: " + cityValue
  temp.innerHTML = "Temp: " + tempValue + " F"
  wind.innerHTML = "Wind speed: " + windValue + " mph"
  humid.innerHTML = "Humidity: " + humidValue + " %"
  date.innerHTML = dateValue
  icon.innerHTML = $(".icon").html("<https://api.openweathermap.org/data/2.5/weather?&appid=9e8abcfacac489077dd005a3537e2e90=" + iconValue + ">")
  // renderSearch()
  //maybe not null
  // if (searchInput == null){
  //   return
  // } 

  //have this called by previous function
  searchHistory.push(searchInput)
  localStorage.setItem("searchInput", JSON.stringify(searchHistory))
//new function to render search history


var storedHistory = localStorage.getItem("searchInput")
console.log(storedHistory.length)
 function renderSearch(storedHistory){
    for(var i = 0; i < storedHistory.length; i++){
      console.log(storedHistory[i])
  }
}  
renderSearch(storedHistory)
  // 5 day forecast have previous function call this one
  fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ inputValue.value + "&appid=9e8abcfacac489077dd005a3537e2e90&units=imperial")
  .then(response => response.json())
  .then (data => {console.log(data)
    

  //   for (i=0;i<5;i++){
  //     var fCity = data["name"]
  //     var fDate= data["dt-text"]
  //     // var iconcode= response.list[((i+1)*8)-1].weather[0].icon;
  //     // var iconurl="https://openweathermap.org/img/wn/"+iconcode+".png";
  //     var fTemp= data["main"]["temp"]
  //     var fWind= data["wind"]["speed"]
  //     var fHumidity= data["main"]["humidity"]

  //     $("#fCity"+i).html(fCity);
  //     $("#fDate"+i).html(fDate);
  //     $("#fImg"+i).html("<img src="+iconurl+">");
  //     $("#fTemp"+i).html(fTemp);
  //     $("#fWind"+i).html(fWind+" mph");
  //     $("#fHumidity"+i).html(fHumidity+" %");
  // }

    

        






    
  })
} )
 


})

