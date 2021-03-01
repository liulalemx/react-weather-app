import { useEffect, useState } from "react";
// Global Styles
import GlobalStyle from "./components/GlobalStyle";
// Components
import Header from "./components/Header";
import Search from "./components/Search";
import Panel from "./components/Panel";

function App() {
  // States
  const [weather, setWeather] = useState(null);
  const [tempUnit, setTempUnit] = useState("metric");
  const [searchValue, setSearchValue] = useState("Addis Ababa");

  const auth = "4830fbc71898dbf53713b1e4fff60c6a";
  // let searchValue = "Bahrain";

  useEffect(() => {
    const getWeather = async () => {
      const weatherFromServer = await fetchWeather();
      setWeather(weatherFromServer);
    };
    getWeather();
  }, []);

  // Fetch Data
  const fetchWeather = async () => {
    const result = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=${tempUnit}&appid=${auth}`
    );
    const data = await result.json();
    return data;
  };

  //Search City
  const searchCity = async () => {
    const weatherFromServer = await fetchWeather();
    setWeather(weatherFromServer);
  };

  // Toggle Unit
  const toggleWeather = async () => {
    const weatherFromServer = await fetchWeather();
    setWeather(weatherFromServer);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchCity={searchCity}
      />
      {weather !== null ? (
        <Panel
          weather={weather}
          unit={toggleWeather}
          tempUnit={tempUnit}
          setTempUnit={setTempUnit}
        />
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default App;
