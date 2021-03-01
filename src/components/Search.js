import React from "react";
import { FaSearchLocation } from "react-icons/fa";
// Styled
import styled from "styled-components";

const Search = ({ searchValue, setSearchValue, searchCity }) => {
  return (
    <SearchForm>
      <input
        type="text"
        className="search-input"
        onInput={(e) => setSearchValue(e.target.value)}
      />
      <button
        className="submit-btn"
        onClick={(e) => {
          e.preventDefault();
          searchValue ? searchCity() : alert("Insert a City name!");
        }}
      >
        <FaSearchLocation className="search-icon" />
      </button>
    </SearchForm>
  );
};

// Styled Components
const SearchForm = styled.form`
  min-height: 20vh;
  display: flex;
  align-items: center;
  padding: 2rem;

  .search-input {
    font-size: 1.5rem;
    padding: 0.5rem;
    width: 90%;
    border: none;
    border: 2px solid rgb(95, 99, 104);
    border-radius: 2rem;
    background-color: #202124;
    color: white;
    :focus {
      outline: none;
    }
  }

  .submit-btn {
    border: none;
    border-radius: 50%;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
  }

  .search-icon {
    font-size: 1.5rem;
  }
`;

export default Search;
