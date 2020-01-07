//PUESDOCODE FOR WEATHER DASHBORED

//WEATHER API $AJAX
var apiKey = '69f15c00682d18316696a7296341bf67';
var units = 'imperial';
var searchMethod ='zip';

// function searchWeather(searchTerm) {
//     fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appID}&units=${units}`).then(result => {
//         return result.json();
//     }).then(result => {
//         init(result);
//     })
// }
//  function init(resultFromServer){
//      console.log(resultFromServer);
//  }

//  document.getElementById('searchBtn').addEventListener('click', () => {
//      var searchTerm = document.getElementById('searchInput').nodeValue;
//     if(searchTerm) {
//         searchWeather(searchTerm);
//     };
//  })

//SEARCH BUTTON FOR CITY
    // SAVE IN LOCAL STOARGE

    // POP UP 5 DAY FORECAST IN ITS OWN DIV
    // 
   
// Get location 
getLocation();

function getLocation(){
    if( navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        alert("Location in not supported by the browser!");
    }
}

function getWeather() {
    $(document).ready(function(){
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=")
    })
}
    