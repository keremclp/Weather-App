import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  // Access the location object and extract the state
  const { state } = useLocation();
  // Access the selected result from the state
  const selectedResult = state?.selectedResult;

  // Render your Home component with the selected result
  return (
    <div>
      <h1 className="text-white">Hello World</h1>

      {selectedResult && (
        <>
          <p className="text-white">{selectedResult.name}</p>
          <p className="text-white">{selectedResult.country}</p>
        </>
      )}
      {/* Render other content as needed */}
    </div>
  );
};

export default Home;
