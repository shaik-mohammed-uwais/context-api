import React, { useState } from "react";
import userContext from "./usercontext";

const ContextProvider = ({ children }) => {
  const [data, setdata] = useState("");
  return (
    <userContext.Provider value={{ data, setdata }}>
      {children}
    </userContext.Provider>
  );
};

export default ContextProvider;
