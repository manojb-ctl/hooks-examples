import "./App.css";
import React from "react";
import UseStateExmp from "./components/UseStateExmp/UseStateExmp";
import UseEffectExmp from "./components/UseEffectExmp/UseEffectExmp";
import UseRefExmp from "./components/UseRefExmp/UseRefExmp";
import UseContextExmp from "./components/UseContextExmp/UseContextExmp";
import UseReducerExmp from "./components/UseReducerExmp/UseReducerExmp";
import UseMemoExmp from "./components/UseMemoExmp/UseMemoExmp";
import UseCallbackExmp from "./components/UseCallbackExmp/UseCallbackExmp";

const App = () => {
  return (
    <div>
      {/* <UseStateExmp /> */}
      {/* <UseEffectExmp /> */}
      {/* <UseRefExmp /> */}
      {/* <UseContextExmp /> */}
      {/* <UseReducerExmp /> */}
      {/* <UseMemoExmp /> */}
      <UseCallbackExmp />
    </div>
  );
};

export default App;
