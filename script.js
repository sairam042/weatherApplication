const api="https://api.openweathermap.org/data/2.5/weather?q=$`city`&appid=$`apiKey`&units=metric";
const apiKey="e05aaeeb5b0af6c2ee1371858357ccba";

let cities=[];


document.querySelector("#add").addEventListener("click",async ()=>{
    let cityName=document.querySelector("#cityName").value;
    if(cityName){
        addCity(cityName);
    }
});

async function addCity(cityName){
    const response = await fetch(api);
    var data=await response.json();

    var name=response.name;
    //check weather city exists
    for(let i=0;i<cities.length;i++){
        if(cities[i].name == name){
            break;
        }
    }

    //making new city object

    let city={
        country:response.sys.country,
        cityName:response.name,
        weather:response.weather[0].main,
        temperature:response.main.temp,
        humidity:response.main.humidity,
        pressure:response.main.pressure,
        weatherDescription:response.weather[0].description
    }

    cities.push(city);
    cities.sort((cityA, cityB) => {
        return cityA.temperature - cityB.temperature;
    });
    console.log(cities);
}


