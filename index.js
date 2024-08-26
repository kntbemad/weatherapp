const apitemplate = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY";
const apitoronto = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/toronto?unitGroup=metric&key=7R8JP3QQZ3Z8G222CFYVNEZ9E&contentType=json";

async function getData(location){
    try {
        let apistring = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + location + "?unitGroup=metric&key=7R8JP3QQZ3Z8G222CFYVNEZ9E&contentType=json"; 
        let data = await fetch(apistring)
        let jsondata = await data.json();
        console.log(jsondata);
        document.getElementById("locationtext").innerHTML = jsondata.resolvedAddress;
        document.getElementById("temptext").innerHTML = jsondata.currentConditions.temp + "°C";
        document.getElementById("feelstext").innerHTML = jsondata.currentConditions.feelslike + "°C";
    } catch(e){
        console.log("Invalid Location \n" + e);
        document.getElementById("locationtext").innerHTML = "Invalid Location";
        document.getElementById("temptext").innerHTML = "Invalid Location";
        document.getElementById("feelstext").innerHTML = "Invalid Location";
    }
}

const submitbtn = document.getElementById("submitbtn");
const weatherform = document.getElementById("weatherform");

weatherform.addEventListener("submit", (event) => {
    event.preventDefault(); 
    let location = document.getElementById("location").value; 
    getData(location)
});

