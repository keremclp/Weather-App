import React from "react";
/*import Logo.svg from public folder*/
import Logo from "../Vector.svg";
import { useState, Fragment } from "react";
import axios from "axios";
import { Combobox, Transition } from "@headlessui/react";

function SearchBar({ onSearchChange }) {
  const [search, setSearch] = useState(null);
  const [query, setQuery] = useState("");

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    // Call callback function passed in by parent with
    // the search data
    onSearchChange(searchData);
  };

  return (
    /*Use logo.svg*/
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
              placeholder="Wolswagen"
              displayValue={search}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options></Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </>
  );
}

export default SearchBar;
