import React, { useEffect, useState } from "react";
import axios from "axios";
function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "1f7b4f32bb904afa9da173930231409";


useEffect(() => {
    axios.get("")
})


  return <div>123</div>;
}

export default Weather;
