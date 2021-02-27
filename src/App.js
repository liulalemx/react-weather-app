import { useEffect } from "react";

function App() {
  const auth = "4830fbc71898dbf53713b1e4fff60c6a";
  let searchValue = "Addis Ababa";
  let img;
  // const log = "04n";

  useEffect(() => {
    const getWeather = async () => {
      const weatherFromServer = await fetchWeather();
    };

    getWeather();
  });

  // Fetch Data
  const fetchWeather = async () => {
    const result = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${auth}`
    );
    const data = await result.json();
    return data;
  };

  return (
    <div className="App">
      <h1>Weather App</h1>

      <img src={`http://openweathermap.org/img/wn/04n@2x.png`} alt="" />
    </div>
  );
}

export default App;
