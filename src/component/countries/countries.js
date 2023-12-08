import React, { useContext } from "react";
import "./countries.css";
import { postcontext } from "../../Context/context";

const Countries = () => {
  let { defaultData } = useContext(postcontext);
  return (
    <div className="country-names">
      {defaultData.map((values, index) => (
        <div className="countrynames" key={index}>
          <div className="country">
            <h3>{values.country}</h3>
          </div>
          <div className="countryFullName">
            <h4>{values.countryFullName}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countries;
