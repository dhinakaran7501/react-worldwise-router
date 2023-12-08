import React from "react";
import "./product.css";
import Navbar from "../navbar/navbar";

const Product = () => {
  return (
    <div className="Product">
      <Navbar />
      <div className="row2">
        <div className="content-sec">
          <h2>About WorldWide.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
        <div className="image-section">
          <img src="./img/product.jpg" alt="Product" />
        </div>
      </div>
    </div>
  );
};

export default Product;
