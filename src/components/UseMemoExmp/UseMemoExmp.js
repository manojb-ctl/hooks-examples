import React, { useMemo, useState } from "react";

const UseMemoExmp = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const increment = () => {
    console.log("increment : countOne");
    setCountOne(countOne + 1);
  };

  const decrement = () => {
    console.log("decrement: countTwo");
    setCountTwo(countTwo - 1);
  };

  // this func is also called when countTwo is updated so that used useMemo with dependency for memoized value.
  const isEven = useMemo(() => {
    console.log("isEven func called for countOne");
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      <button onClick={increment}>Count One: {countOne}</button>
      {isEven ? "Even" : "odd"}
      <button onClick={decrement}>Count Two: {countTwo}</button>
    </div>
  );
};

export default UseMemoExmp;
