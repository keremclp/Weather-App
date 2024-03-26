import React from "react";
/*import Logo.svg from public folder*/
import Logo from "../Vector.svg";
function SearchBar() {
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
          <div className="title-typeweather"></div>
          <div className="explanation">
            
          </div>
        </div>
      </div>
      <div>SearchBar</div>
    </>
  );
}

export default SearchBar;
