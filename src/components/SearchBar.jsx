import React, { useState, Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Vector.svg";
import axios from "axios";
import { Combobox, Transition } from "@headlessui/react";

function SearchBar({ onSearchChange }) {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();

  const fetchCities = async (city_name) => {
    return axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=100000000&appid=ca248cee0c1175401424a91fab6b1b59`
      )
      .then((response) => {
        const options = response.data.map((city) => {
          return {
            value: `${city.lat} ${city.lon}`,
            label: `${city.name}, ${city.country}`,
          };
        });
       
        setSearchResults(response.data);
        onSearchChange(options);
        return { options };
      })
      .catch((error) => {
        console.error("Error loading options:", error);
        return { options: [] }; // Return empty options array in case of error
      });
  };

  const handleOnChange = (e) => {
    const searchData = e.target.value;
    fetchCities(searchData);
    
    setQuery(searchData);
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

  const handleOptionClick = async (selectedResult) => {
    // Navigate to Home component with selected result
    navigate("/home", { state: { selectedResult } });
  };

  useEffect(() => {
    if (searchResults.length > 0) {
      Promise.all(
        searchResults.map(async (result, index) => {
          const countryName = await fetchCountryName(result.country);
          return (
            <Combobox.Option
              key={index}
              className="text-gray-800 bg-gray-800 px-4 py-3 rounded-t-lg rounded-b-lg border border-gray-300 transition ease-out duration-300 transform hover:scale-105"
              value={result.name}
              onClick={() => handleOptionClick(result)}
            >
              <div className="text-md font-nunito text-base font-normal leading-6 text-left text-gray-100">
                {result.name},{result.country} {countryName}
              </div>
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
      <div className="flex justify-center items-start h-screen">
        <div className="p-4 m-5 ">
          <div className="flex flex-row">
            <img src={Logo} alt="logo" className="  " />
            <div
              className="font-roboto-condensed font-bold text-lg leading-relaxed text-white
"
            >
              i
            </div>
            <div
              className="text-lg text-white
"
            >
              Weather
            </div>
          </div>
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
            <div className="text-field">
              <Combobox.Input
                className="w-full h-auto rounded-lg px-2"
                value={query}
                aria-labelledby="location-label"
                placeholder="Search location..."
                onChange={handleOnChange}
              />
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
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
