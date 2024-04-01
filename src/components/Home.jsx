import React from "react";

const Home = (props) => {
  // Access the selected result from the location state
  console.log(props);
  // Render your Home component with the selected result
  return (
    <div>
      <h1 className="text-white">Selected Result</h1>
      <p className="text-white">{props.name}</p>
      <p className="text-white">{props.country}</p>
      {/* Render other content as needed */}
    </div>
  );
};

export default Home;
