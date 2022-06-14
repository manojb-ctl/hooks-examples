import React, { createContext } from "react";
import BComp from "./BComp";

// Data Flow: AComp -> BComp -> CComp -> DComp (Data passing AComp to DComp : props drilling problem so that used useContext)

const FirstName = createContext();
const LastName = createContext();

const AComp = () => {
  return (
    <div>
      <FirstName.Provider value="Manoj">
        <LastName.Provider value="Bodar">
          <BComp />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
};

export default AComp;
export { FirstName, LastName };
