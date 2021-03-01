import React from "react";
import styled from "styled-components";

const NearbyCity = ({ name, temp, img }) => {
  return (
    <City>
      <h3>{name}</h3>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
      <h3>{temp}&deg;</h3>
    </City>
  );
};

// Styled Components
const City = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.5rem 1rem 1.5rem 1rem;
  margin: 1rem;
  border: 0.5px solid #fbbc04;
  border-radius: 1rem;

  h3 {
    font-size: 0.8rem;
  }
`;

export default NearbyCity;
