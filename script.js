//API KEY
var APIKey = "69f15c00682d18316696a7296341bf67";
// var city = $("#search_i");

//URL SEARCH CITY

//variables 

// var tempEl = $("#temp_l");
// var humidityEl = $("#humidity_l");
// var windEl = $("#wind_speed_l");
// var uvEl = $("#uv_index_l");


// // Todays date;
// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //Jan = 0!
// var yyyy = today.getYear();

// today = mm + '/' + dd + '/' + yyyy;
// document.write(today);


// API url


//search button
var searchBtn = $("#searchB");
// let searchBtn = document.getElementById("searchB")
$(document).ready(function(){
    searchBtn.on("click", function(e){
        e.preventDefault()
        //way to get it input
         let city = e.currentTarget.previousElementSibling.value
        //  var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + city + "&units=imperial&appid=" + APIKey;
        let queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKey}`
        console.log(city)
          // Performing our AJAX GET request
          $.ajax({
            url: queryURL,
            method: "GET"
          })
            // After the data comes back from the API
            .then(function(response) {
                console.log(response.weather)
                let div = document.getElementById("temp")
                div.innerHTML = response.weather[0].main
                
              // Storing an array of results in the results variable
            //   var results = response.data;
    
    })
})
})


//way to get it input
// response.currentTarget.previousElementSibling.value


//city buttons to the city forecast


//day 1: Date/ Icon / Temp/ Humidity

//day 2: Date/ Icon / Temp/ Humidity

//day 3: Date/ Icon / Temp/ Humidity

//day 4: Date/ Icon / Temp/ Humidity

//day 5: Date/ Icon / Temp/ Humidity

