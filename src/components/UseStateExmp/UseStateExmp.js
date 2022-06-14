import React, { useState } from "react";

const UseStateExmp = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const increment = () => {
    setCount(count + 1);
  };

  const nameChangeHandler = () => {
    setName("Test name");
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <br />
      <br />
      <p>Name: {name}</p>
      <button onClick={nameChangeHandler}>Name Change</button>
    </div>
  );
};

export default UseStateExmp;
