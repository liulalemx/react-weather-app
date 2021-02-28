import React from "react";
// Styled
import styled from "styled-components";

const Panel = ({ weather }) => {
  return (
    <StyledPanel>
      <div className="weather-info">
        <img
          className="weather-img"
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt=""
        />
        <div className="current-weather">
          <h2>{weather.main.temp}</h2>
          <button> &deg; C</button>
          <button> &deg; F</button>
        </div>
        <div className="additional-info">
          <h4>Cloudiness: {weather.clouds.all}%</h4>
          <h4>Humidity: {weather.main.humidity}%</h4>
          <h4>Wind Speed: {weather.wind.speed}m/s</h4>
        </div>
      </div>
      <div className="location-info">
        <h3>
          {weather.name},{weather.sys.country}
        </h3>
        <h4>Date</h4>
        <h4>{weather.weather[0].description}</h4>
      </div>
    </StyledPanel>
  );
};

// Styled Components
const StyledPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .weather-info {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    margin-right: 3rem;

    img {
      color: white;
    }

    .current-weather {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.3rem;

      button {
        font-size: 0.8rem;
        padding: 0.5rem;
        margin-bottom: 1rem;
      }
    }

    .additional-info {
      padding-left: 0.5rem;
    }
  }

  .location-info {
    h3,
    h4 {
      text-align: right;
    }
  }
`;

export default Panel;
