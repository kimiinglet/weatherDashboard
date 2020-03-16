//API KEY
var APIKey = "69f15c00682d18316696a7296341bf67";
var searchMethod;

function getSearchMethod(searchTerm) {
  if(searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
  searchMethod = 'zip';
  else
  searchMethod = 'q'
}


// city buttons
var austinEl = $("#Austin");
var chicagoEl = $("#Chicago");
var atlantaEl = $("#Atlanta");
var houstonEl = $("#Houston");
var sfoEl = $("#sfo");

// variables for one day
var cityEl = document.getElementById("cityInputed")
var temperature = document.getElementById("temp");
var humidity = document.getElementById("humidity");
var windSpeed = document.getElementById("windSpeed");
var uvIndex = document.getElementById("uvIndex");

// variables for 5 day
// variables for day 1
var date1 = document.getElementById("day1");
var temperature1 = document.getElementById("temp1");
var humidity1 = document.getElementById("humidity1");
// variables for day 2
var date2 = document.getElementById("day2");
var temperature2 = document.getElementById("temp2");
var humidity2 = document.getElementById("humidity2");
// variables for day 3
var date3 = document.getElementById("day3");
var temperature3 = document.getElementById("temp3");
var humidity3 = document.getElementById("humidity3");
// variables for day 4
var date4 = document.getElementById("day4");
var temperature4 = document.getElementById("temp4");
var humidity4 = document.getElementById("humidity4");
// variables for day 5
var date5 = document.getElementById("day5");
var temperature5 = document.getElementById("temp5");
var humidity5 = document.getElementById("humidity5");


// Todays date;
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //Jan = 0!
var yyyy = today.getYear();

// today = mm + '/' + dd;
// document.write(today);



//search button
var searchBtn = $("#searchB");
// let searchBtn = document.getElementById("searchB")

//when the document loads ->
$(document).ready(function(){

    //listening for a click on search button
    searchBtn.on("click", function(e){
      e.preventDefault()

      //grab input from html element
      let city = e.currentTarget.previousElementSibling.value

      // construct a url for api from the information we got from the html input
      let queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKey}`
 

      // Perform our AJAX GET request with our url
      $.ajax({
        url: queryURL,
        method: "GET"
        })

      // After the data comes back from the API
      .then(function(data) {
        cityEl.innerHTML = data.name

        //Kelvin to Fahrenheit
        var tempKelvin= data.main.temp
        var tempCelsius = tempKelvin - 273;
        var tempFahrenheit = tempCelsius * (9/5) + 32;
        var Fahrenheit = Math.floor(tempFahrenheit)

        temperature.innerHTML = Fahrenheit;
        humidity.innerHTML = data.main.humidity
        windSpeed.innerHTML = data.wind.speed
              
          let long = data.coord.lon
          let lat = data.coord.lat

            let uvIndexURL = `http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${long}&appid=${APIKey}`

            //Perform AJAX for uvIndex
              $.ajax({
                url: uvIndexURL,
                method: "GET",
              })
              .then(function(data) {
                uvIndex.innerHTML = data.value
              }
            )

            //weather icon
          // var weatherIcon = document.getElementById('documentIconImg');
          // weatherIcon.src = `http://openweathermap.org/img/w/` + data.weather[0].icon + '.png';

})
})

// Five day forecast
searchBtn.on("click", function(e){
  e.preventDefault()

    // grab input from html element
    let city = e.currentTarget.previousElementSibling.value

    // 
    let queryForcast = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`

    // construct a url for api from the information we got from the html input
    $.ajax({
      url: queryForcast,
      method: "GET",
    })

    // After the data comes back from the API
    .then(function(data) {
      console.log(data)

      // date1.innerHTML = 
      temperature1.innerHTML = data.list[0].main.temp
      humidity1.innerHTML = data.list[0].main.humidity
      
      // date2.innerHTML = 
      temperature2.innerHTML = data.list[7].main.temp
      humidity2.innerHTML = data.list[7].main.humidity

      // date3.innerHTML = 
      temperature3.innerHTML = data.list[14].main.temp
      humidity3.innerHTML = data.list[14].main.humidity

      // date4.innerHTML = 
      temperature4.innerHTML = data.list[22].main.temp
      humidity4.innerHTML = data.list[22].main.humidity

      // date5.innerHTML = 
      temperature5.innerHTML = data.list[30].main.temp
      humidity5.innerHTML = data.list[30].main.humidity

    })

})

  // buttons onclick

  austinEl.click(function() {
    console.log("Austin Clicked!")

  })

  chicagoEl.click(function() {
    console.log("Chicago Clicked!")
  })

  atlantaEl.click(function() {
    console.log("Atlanta Clicked!")

  })

  houstonEl.click(function() {
    console.log("Houston Clicked!")

  })

  sfoEl.click(function() {
    console.log("San Francisco Clicked!")
  })

})







