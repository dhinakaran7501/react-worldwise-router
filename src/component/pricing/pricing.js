import React from "react";
import "./pricing.css";
import Navbar from "../navbar/navbar";

const Pricing = () => {
  return (
    <div className="Pricing">
      <Navbar />
      <div className="row2">
        <div className="content-sec">
          <h2>
            Simple pricing. <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <div className="image-section">
          <img src="./img/pricing.jpg" alt="pricing" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
