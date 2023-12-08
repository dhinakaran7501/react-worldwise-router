import { Link } from "react-router-dom";
import "./cities.css";
import { useContext } from "react";
import { postcontext } from "../../Context/context";

const Cities = () => {
  let { defaultData } = useContext(postcontext);
  // console.log(defaultData);
  return (
    <div className="cities-names">
      {defaultData.map((values, index) => (
        <div className="names" key={index}>
          <Link to={`${values.capital}`}>
            <div className="col1">
              <div className="Country">
                <h5>{values.country}</h5>
              </div>
              <div className="Capital">
                <h3>{values.capital}</h3>
              </div>
            </div>
            <div className="col2">
              <div className="time">
                <p>{`(${values.date})`}</p>
              </div>
              <div className="icon">&#x274c;</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cities;
