import React from "react";
// Styled
import styled from "styled-components";

const Panel = () => {
  return (
    <StyledPanel>
      <div className="weather-info">
        <img
          className="weather-img"
          src={`http://openweathermap.org/img/wn/04n@2x.png`}
          alt=""
        />
        <div className="current-weather">
          <h2>22</h2>
          <button> &deg; C</button>
          <button> &deg; F</button>
        </div>
        <div className="additional-info">
          <h4>Cloudiness: 00</h4>
          <h4>Humidity: 00</h4>
          <h4>Wind Speed: 00</h4>
        </div>
      </div>
      <div className="location-info">
        <h3>Location and Country</h3>
        <h3>Day</h3>
        <h3>Description</h3>
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
    h3 {
      text-align: right;
    }
  }
`;

export default Panel;
