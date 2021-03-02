import { useEffect, useState } from "react";
// Global Styles
import GlobalStyle from "./components/GlobalStyle";
// Components
import Header from "./components/Header";
import Search from "./components/Search";
import Panel from "./components/Panel";
import NearbyCities from "./components/NearbyCities";

function App() {
  // States
  const [weather, setWeather] = useState(null);
  const [tempUnit, setTempUnit] = useState("metric");
  const [searchValue, setSearchValue] = useState("Addis Ababa");
  const [nearbyCities, setNearbyCities] = useState(null);

  const auth = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const getWeather = async () => {
      {
        const weatherFromServer = await fetchWeather();
        setWeather(weatherFromServer);
      }
    };
    getWeather();
    NearbyCity();
  }, []);

  // Fetch Data
  const fetchWeather = async () => {
    try {
      const result = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=${tempUnit}&appid=${auth}`
      );
      const data = await result.json();
      return data;
    } catch (e) {
      alert("Sorry, Failed to Fetch Data. :(");
    }
  };

  //Fetch Nearby city data
  const NearbyCity = async () => {
    try {
      const weatherFromServer = await fetchWeather();
      const result = await fetch(
        `http://api.openweathermap.org/data/2.5/find?lat=${weatherFromServer.coord.lat}&lon=${weatherFromServer.coord.lon}&cnt=5&units=${tempUnit}&appid=${auth}`
      );
      const data = await result.json();
      setNearbyCities(data);
    } catch (e) {
      alert("Sorry, Failed to Fetch Data. :(");
    }
  };

  //Search City
  const searchCity = async () => {
    const weatherFromServer = await fetchWeather();
    setWeather(weatherFromServer);
    NearbyCity();
  };

  // Toggle Unit
  const toggleWeather = async () => {
    const weatherFromServer = await fetchWeather();
    setWeather(weatherFromServer);
    NearbyCity();
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
      <hr />
      {nearbyCities !== null ? (
        <NearbyCities nearbyCities={nearbyCities} />
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default App;
