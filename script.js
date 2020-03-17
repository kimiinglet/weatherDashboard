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
$(document).ready(function cityInputed(){

    //listening for a click on search button
    searchBtn.on("click", function(e){
      e.preventDefault()

      //grab input from html element
      let city = e.currentTarget.previousElementSibling.value

      // construct a url for api from the information we got from the html input
      let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKey}`
 

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

            let uvIndexURL = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${long}&appid=${APIKey}`

            //Perform AJAX for uvIndex
              $.ajax({
                url: uvIndexURL,
                method: "GET",
              })
              .then(function(data) {
                uvIndex.innerHTML = data.value
              }
            )
})
})

// Five day forecast
searchBtn.on("click", function(e){
  e.preventDefault()

    // grab input from html element
    let city = e.currentTarget.previousElementSibling.value

    // 
    let queryForcast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`

    // construct a url for api from the information we got from the html input
    $.ajax({
      url: queryForcast,
      method: "GET",
    })

    // After the data comes back from the API
    .then(function(data) {
      console.log(data)

  
       //Kelvin to Fahrenheit Day 1
      var tempKelvin= data.list[0].main.temp
      var tempCelsius = tempKelvin - 273;
      var tempFahrenheit = tempCelsius * (9/5) + 32;
      var Fahrenheit = Math.floor(tempFahrenheit)
      

      date1.innerHTML = moment().add(1, 'days').calendar()
      temperature1.innerHTML = Fahrenheit;
      humidity1.innerHTML = data.list[0].main.humidity;
      
      //Kelvin to Fahrenheit Day 2
      var tempKelvin2 = data.list[7].main.temp
      var tempCelsius2 = tempKelvin2 - 273;
      var tempFahrenheit2 = tempCelsius2 * (9/5) + 32;
      var Fahrenheit2 = Math.floor(tempFahrenheit2)

      // date2.innerHTML =
      date2.innerHTML = moment().add(2, 'days').calendar()
      temperature2.innerHTML = Fahrenheit2
      humidity2.innerHTML = data.list[7].main.humidity


            //Kelvin to Fahrenheit Day
      var tempKelvin3 = data.list[14].main.temp
      var tempCelsius3 = tempKelvin3 - 273;
      var tempFahrenheit3 = tempCelsius3 * (9/5) + 32;
      var Fahrenheit3 = Math.floor(tempFahrenheit3)
      
      // date3.innerHTML =
      date3.innerHTML = moment().add(3, 'days').calendar()
      temperature3.innerHTML = Fahrenheit3
      humidity3.innerHTML = data.list[14].main.humidity


            //Kelvin to Fahrenheit Day
      var tempKelvin4= data.list[22].main.temp
      var tempCelsius4 = tempKelvin4 - 273;
      var tempFahrenheit4 = tempCelsius4 * (9/5) + 32;
      var Fahrenheit4 = Math.floor(tempFahrenheit4)
      
      // date4.innerHTML =
      date4.innerHTML = moment().add(4, 'days').calendar()
      temperature4.innerHTML = Fahrenheit4
      humidity4.innerHTML = data.list[22].main.humidity


      //Kelvin to Fahrenheit Day
      var tempKelvin5 = data.list[30].main.temp
      var tempCelsius5 = tempKelvin5 - 273;
      var tempFahrenheit5 = tempCelsius5 * (9/5) + 32;
      var Fahrenheit5 = Math.floor(tempFahrenheit5)
      
      // date5.innerHTML =
      date5.innerHTML = moment().add(5, 'days').calendar()
      temperature5.innerHTML = Fahrenheit5
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







