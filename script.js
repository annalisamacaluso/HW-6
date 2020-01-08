var apiKey = "166a433c57516f51dfab1f7edaed8413";
​
//var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=" + apiKey;
​
​
​
​
$("#search").val()
​
$("button").on("click", function(event){
    event.preventDefault();
    var city = $("#search").val()
​
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + apiKey;
    console.log(queryURL)
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
        var temp = response.main.temp;
        var fTemp = (temp - 273.15) * 9/5 + 32;
        console.log(fTemp)
        
        var tempDiv = $("<p>").text(`Temp: ${fTemp}˚F`);
    
        var boxDiv = $("#box");
        $("#box").append(tempDiv)
    })
})