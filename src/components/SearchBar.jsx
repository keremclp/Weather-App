import React, { useState, Fragment, useEffect } from "react";
import Logo from "../Vector.svg";
import axios from "axios";
import { Combobox, Transition } from "@headlessui/react";

function SearchBar({ onSearchChange }) {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState([]);

  const fetchCitiesNames = async (e) => {
    const city_name = e.target.value;
    try {
      const res = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=100000000&appid=ca248cee0c1175401424a91fab6b1b59`
      );
      setSearchResults(res.data);
      setQuery(city_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  const fetchCountryName = async (countryCode) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
      );
      if (
        response.data &&
        response.data[0] &&
        response.data[0].name &&
        response.data[0].name.common
      ) {
        return response.data[0].name.common;
      } else {
        console.error("Country name not found in response:", response.data);
        return "Unknown"; 
      }
    } catch (error) {
      console.error("Error fetching country name:", error);
      return "Unknown"; 
    }
  };


  useEffect(() => {
    if (searchResults.length > 0) {
      Promise.all(
        searchResults.map(async (result, index) => {
          const countryName = await fetchCountryName(result.country);
          return (
            <Combobox.Option key={index} value={result.name}>
              {result.name}, {result.country} {countryName}
            </Combobox.Option>
          );
        })
      ).then((resolvedOptions) => {
        setOptions(resolvedOptions);
      });
    }
  }, [searchResults]);

  return (
    <>
      <div className="logo">
        <div className="logo-main">
          <img src={Logo} alt="logo" className="vector" />
          <div className="text">i</div>
          <div className="text-layer">Weather</div>
        </div>
      </div>
      <div className="welcome">
        <div className="title">
          <div className="title-typeweather">
            Welcome to <span className="typeweather">TypeWeather!</span>
          </div>
          <div className="explanation">
            Choose a location to see the weather forecast
          </div>
        </div>

        <Combobox>
          <div className="relative w-full">
            <Combobox.Input
              className="search-manufacturer__input"
              placeholder="Enter location..."
              onChange={fetchCitiesNames}
            />
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options>
                {options.length > 0 ? options : <div>No results found</div>}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </>
  );
}

export default SearchBar;
