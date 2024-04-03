import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  // Access the location object and extract the state
  const { state } = useLocation();
  // Access the selected result from the state
  const selectedResult = state?.selectedResult;

  // Render your Home component with the selected result
  return (
    <div className="flex justify-center flex-col absolute ">
      <div className="text-white">Home</div>
      <div className="  text-white">
        <div class="">
          {selectedResult && (
            <div class="">
              <>
                <p class="text-2xl font-bold ">{selectedResult.name}</p>
                <p class="text-lg text-white">{selectedResult.country}</p>
              </>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
