import React, { useContext } from "react";
import "./form.scss";
import { Link } from "react-router-dom";
import { postcontext } from "../../Context/context";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Form = () => {
  let { handleListAdd, cityName, date, aboutCity, dispatch } =
    useContext(postcontext);

  function handleformSubmit(event) {
    event.preventDefault();

    let val = {
      id: Date.now(),
      country: "IN",
      countryFullName: "India",
      capital: cityName,
      date: date,
      notes: aboutCity,
      link: `https://en.wikipedia.org/wiki/${cityName}`,
    };

    handleListAdd(val);
  }

  const handlevalue1 = (value) => {
    dispatch({ type: "val1", payload: value });
  };

  function handlevalue2(event) {
    dispatch({ type: "val2", payload: event.target.value });
  }
  function handlevalue3(event) {
    dispatch({ type: "val3", payload: event.target.value });
  }
  return (
    <div className="form">
      <form className="_form_yr8p9_1 " onSubmit={handleformSubmit}>
        <div className="_row_yr8p9_11">
          <label>City name</label>
          <input
            id="cityName"
            value={cityName}
            onChange={(event) => handlevalue1(event.target.value)}
          />
          <span className="_flag_yr8p9_23"></span>
        </div>
        <div className="_row_yr8p9_11">
          <label>When did you go to Cubillos?</label>
          <div className="">
            <span
              role="alert"
              aria-live="polite"
              className="react-datepicker__aria-live"
            ></span>
            <input type="text" id="date" value={date} onChange={handlevalue2} />
          </div>
        </div>
        <div className="_row_yr8p9_11">
          <label>Notes about your trip to Cubillos</label>
          <textarea
            id="notes"
            value={aboutCity}
            onChange={handlevalue3}
          ></textarea>
        </div>
        <div className="_buttons_yr8p9_18">
          <Button variant="contained" color="success" onSubmit={handleListAdd}>
            Add
          </Button>
          <Link to="/nestedroute/cities">
            <Button className="_btn_de80c_1 _back_de80c_18" variant="outlined">
              <KeyboardBackspaceIcon /> Back
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
