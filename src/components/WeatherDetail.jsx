import React from "react";

function WeatherDetail({ data }) {
  return (
    <div className="relative">
      <div className="absolute top-[20px] left-[20px]  ">
        <div className="w-full h-[56px] py-16 gap-0 border-b flex justify-between">
          {data && (
            <div className="">
              <div className=" text-white">
                <div className="w-[158px] h-[24px] ">
                  <img
                    src={require("../thermal.svg")}
                    
                    className="w-6 h-6 py-[0.94px] px-[6.19px] "
                  />
                  <p className="text-white"> {data.city} </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WeatherDetail;
