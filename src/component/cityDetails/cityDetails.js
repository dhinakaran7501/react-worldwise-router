import React, { useContext } from "react";
import "./cityDetails.css";
import { Link, useParams } from "react-router-dom";
import { postcontext } from "../../Context/context";

const CityDetails = () => {
  let { defaultData } = useContext(postcontext);
  let { capital } = useParams();
  return (
    <>
      {defaultData.map((values, index) =>
        values.capital === capital ? (
          <div className="countryDetails" key={index}>
            <div className="city-name">
              <h6>City Name</h6>
              <h2>
                <sub>{values.country}</sub> {values.capital}
              </h2>
            </div>
            <div className="travel">
              <h6>YOU WENT TO LISBON ON</h6>
              <p>{values.date}</p>
            </div>
            <div className="notes">
              <h6>YOUR NOTES</h6>
              <p>{values.notes}</p>
            </div>
            <div className="learnMore">
              <h6>Learn More</h6>
              <a href={values.link} target="blank">
                Check out {values.capital} on Wikipedia →
              </a>
            </div>
            <div className="backbtn">
              <Link to="/nestedroute/cities">← Back</Link>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </>
  );
};

export default CityDetails;
