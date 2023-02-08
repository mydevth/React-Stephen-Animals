import React, { useState } from "react";
import AnimalShow from "./AnimalShow";

const App = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button onClick={handleClick}> Add Animal </button>
      <p>Number of animals : {count} </p>
      <AnimalShow />
    </>
  );
};

export default App;
