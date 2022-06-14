import React, { useContext } from "react";
import { FirstName, LastName } from "./AComp";

const DComp = () => {
  const fName = useContext(FirstName);
  const lName = useContext(LastName);

  return (
    <div>
      Name: {fName} {lName}
    </div>
  );
};

export default DComp;
