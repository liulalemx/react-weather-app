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

  const auth = "4830fbc71898dbf53713b1e4fff60c6a";
  let searchValue = "Addis Ababa";

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
      `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${auth}`
    );
    const data = await result.json();
    return data;
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Search />
      {weather !== null ? (
        <Panel weather={weather} />
      ) : (
        <h1>Sorry! Unable to fetch data</h1>
      )}
    </div>
  );
}

export default App;
