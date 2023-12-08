import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";

const Homepage = () => {
  return (
    <section className="navbar">
      <Navbar />
      <div className="row2">
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to={"/login"}>
          <p className="trackingNow">Start tracking now</p>
        </Link>
      </div>
    </section>
  );
};

export default Homepage;
