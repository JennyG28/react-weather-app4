import Reach from "react";
import "./Weather.css";
export default function Weather() {
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
    <h1>Denver</h1>
    <ul> 
      <li>Sunday 01:00</li>
      <li> Sunny</li>
      </ul>
    <div className="row mt-3">
      <div className="col-6">
        <div className="clearfix">
        <img
        src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
        alt="Sunny"
        className="float-left"
        />
        
        <span className="temperature">10</span>
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
}