//API KEY
var APIKey = "69f15c00682d18316696a7296341bf67";

//URL SEARCH CITY
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + city + "&units=imperial&appid=" + APIKey;

//variables 
var searchBtn = $("#searchB");
var tempEl = $("#temp_l");
var humidityEl = $("#humidity_l");
var windEl = $("#wind_speed_l");
var uvEl = $("#uv_index_l");


// Todays date;
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //Jan = 0!
var yyyy = today.getYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);

//search button 


//city buttons to the city forecast


//day 1: Date/ Icon / Temp/ Humidity

//day 2: Date/ Icon / Temp/ Humidity

//day 3: Date/ Icon / Temp/ Humidity

//day 4: Date/ Icon / Temp/ Humidity

//day 5: Date/ Icon / Temp/ Humidity

