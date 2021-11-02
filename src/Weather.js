import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {


const[weatherData, setWeatherData] = useState({ready:false});
function handleResponse(response){
  setWeatherData({
ready: true,
  city: response.data.main.name,
  temperature: response.data.main.temp,
  wind: response.data.wind.speed,
  humidity: response.data.main.humidity,
description: response.data.weather[0].description,
  iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
date: new Date(response.data.dt * 1000),
  });

}

if (weatherData.ready){

  return ( 
  <div className="Weather">
    <form>
      <div className="row">
        <div className="col-9">
      <input
      type="search"
      placeholder="Enter city name..."
      className="form-control"
      autoFocus="on"
      />
      </div>
      <div className="col-3">
      <input type="submit" value="Search" className="btn btn-primary w-100" />
      </div>
      </div>
      </form>
    <h1>{weatherData.city}</h1>
    <ul> 
      <li><FormattedDate date={weatherData.date}/></li>
      <li className="text-capitalize">{weatherData.description}</li>
      </ul>
    <div className="row mt-3">
      <div className="col-6">
        <div className="clearfix">
        <img
        src={weatherData.iconUrl}
        alt={weatherData.description}
        className="float-left"
        />
        
        <span className="temperature">{Math.round(weatherData.temperature)}</span>
        <span className="unit"> F</span>
        </div>
                
                        </div>
        <div className="col-6">
          <ul> 
            <li> Humidity: </li>
            <li>Wind: </li>
          </ul>
      </div>
    </div>
    </div>
  );
  
} else {

let apiKey = "c330d6d567e845b62d32598b378046e4";
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);
  
return " Loading...";
}
}