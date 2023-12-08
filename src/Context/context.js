import { useReducer } from "react";
import React, { createContext } from "react";

const postcontext = createContext();
let obj = [
  {
    id: 1,
    country: "PT",
    countryFullName: "Portugal",
    capital: "Libson",
    date: "October 31, 2027",
    notes: "My favorite city so far!",
    link: "https://en.wikipedia.org/wiki/Lisbon",
  },
  {
    id: 2,
    country: "ES",
    countryFullName: "Spain",
    capital: "Madrid",
    date: "July 15, 2027",
    notes: "My favorite city so far!",
    link: "https://en.wikipedia.org/wiki/Madrid",
  },
  {
    id: 3,
    country: "FR",
    countryFullName: "France",
    capital: "Paris",
    date: "March 21, 2027",
    notes:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci doloremque, dicta ipsa architecto saepe earum fugit ut atque necessitatibus praesentium officia, a at accusantium vitae, expedita.",
    link: "https://en.wikipedia.org/wiki/Paris",
  },
];
// states
let stateList = {
  defaultData: obj,
  cityName: "",
  date: "",
  aboutCity: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addItems":
      return { ...state, defaultData: action.payload };
    case "val1":
      return { ...state, cityName: action.payload };
    case "val2":
      return { ...state, date: action.payload };
    case "val3":
      return { ...state, aboutCity: action.payload };
    default:
      return { ...state };
  }
};

const Context = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, stateList);
  let { cityName, date, aboutCity, defaultData } = state;

  function handleListAdd(objects) {
    dispatch({ type: "addItems", payload: [...defaultData, objects] });
  }

  return (
    <postcontext.Provider
      value={{
        cityName,
        date,
        aboutCity,
        dispatch,
        handleListAdd,
        defaultData,
      }}
    >
      {children}
    </postcontext.Provider>
  );
};

export { Context, postcontext };
