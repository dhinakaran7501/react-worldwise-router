import React from "react";
import "./map.css";
import { Link } from "react-router-dom";

const Map = () => {
  return (
    <>
      <div className="location-sec">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14822256.97850619!2d73.15927057446471!3d24.907698423357893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1698675947159!5m2!1sen!2sin"
          loading="lazy"
          title="myFrame"
        ></iframe>
        <Link to="form">
          <button>Position</button>
        </Link>
      </div>
      <div className="login-name">
        <img src="https://i.pravatar.cc/100?u=zz" alt="Name" />
        <h4>Welcome, Jack</h4>
        <Link to={"/"}>
          <button>Logout</button>
        </Link>
      </div>
    </>
  );
};

export default Map;
