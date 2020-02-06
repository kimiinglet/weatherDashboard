//API KEY
var APIKey = "69f15c00682d18316696a7296341bf67";

var humidity = document.getElementById("humidity");
var windSpeed = document.getElementById("windSpeed");
var uvIndex = document.getElementById("uvIndex");



// Todays date;
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //Jan = 0!
var yyyy = today.getYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);




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
                console.log(data)
              humidity.innerHTML = data.main.humidity
              windSpeed.innerHTML = data.wind.speed 
              
              let long = data.coord.lon
              let lat = data.coord.lat

            let uvIndexURL = `http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${long}&appid=${APIKey}`

            //Perform AJAX for uvIndex
              $.ajax({
                url: uvIndexURL,
                method: "GET"
              })
              .then(function(data) {
                uvIndex.innerHTML = data.value
              }
            )
})
})
})




