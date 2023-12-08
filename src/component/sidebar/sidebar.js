import React, { useState } from "react";
import "./sidebar.css";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { postcontext } from "../../Context/context";

const Sidebar = () => {
  let { defaultData } = useContext(postcontext);
  let [show, setshow] = useState(true);
  const handleshow = () => {
    setshow(false);
  };
  return (
    <div className="row1">
      <div className="cities-content-sec">
        <Link to="/">
          <div className="cities-img">
            <img src="../img/logo.png" alt="Logo" />
          </div>
        </Link>
        <div className="cities-btns">
          <Link to="cities">
            <button onClick={handleshow}>Cities</button>
          </Link>
          <Link to="countries">
            <button>Countries</button>
          </Link>
        </div>
        {show ? (
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
        ) : (
          <Outlet />
        )}

        <div className="footer">
          <p>© Copyright 2023 by WorldWise Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
