import React, { useState, useCallback } from "react";
import Child from "./Child";

const Parent = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  // this func is also called when countOne is updated so that used useCallback with dependency for memoized func.
  const getItems = useCallback(() => {
    console.log("getItems...", countTwo + 1, countTwo - 1);
    return [countTwo + 1, countTwo - 1];
  }, [countTwo]);

  return (
    <div>
      <button onClick={() => setCountOne(countOne + 1)}>
        Count One: {countOne}
      </button>
      <button onClick={() => setCountTwo(countTwo + 1)}>
        Count Two: {countTwo}
      </button>
      <Child getItems={getItems} />
    </div>
  );
};

export default Parent;
