import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  // Access the location object and extract the state
  const { state } = useLocation();
  // Access the selected result from the state
  const selectedResult = state?.selectedResult;

  // Render your Home component with the selected result
  return (
    <div className="flex justify-center m-2 bg-gray-800  ">
      <div className="p-8 bg-white  ">
        <div className="text-slate-900">Home</div>
        <div className="card">
          {selectedResult && (
            <div class="">
              <>
                <p class="text-2xl font-bold ">{selectedResult.name}</p>
                <p class="text-lg text-slate-800 ">{selectedResult.country}</p>
                <p class="text-lg text-slate-800 ">
                  {selectedResult.temperature}°C
                </p>
              </>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
