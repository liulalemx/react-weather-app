import React from "react";
import styled from "styled-components";
import NearbyCity from "./NearbyCity";

const NearbyCities = ({ nearbyCities }) => {
  return (
    <Cities>
      {nearbyCities.list.map((city) => (
        <NearbyCity
          key={city.id}
          name={city.name}
          temp={city.main.temp}
          img={city.weather[0].icon}
        />
      ))}
    </Cities>
  );
};

// Styled Components
const Cities = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export default NearbyCities;
