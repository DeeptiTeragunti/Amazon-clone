//Reduce Context API 
import React, { createContext, useContext, useReducer } from "react";

//Prepares the dataLayer
export const StateContext = createContext();

//Wrap our app and provide the Date Layer and use this in index.js
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull data from the dataLayer
export const useStateValue = () => useContext(StateContext);
