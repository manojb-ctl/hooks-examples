import React, { useRef } from "react";

const UseRefExmp = () => {
  const inputRef = useRef();

  const inputRefHandler = () => {
    console.log("Button clicked...");
    inputRef.current.focus();
    console.log(inputRef.current.value);
    inputRef.current.style.color = "red";
    inputRef.current.value = "";
  };

  return (
    <div>
      Name: <input type="text" ref={inputRef} />
      <button onClick={inputRefHandler}>Click Here</button>
    </div>
  );
};

export default UseRefExmp;
