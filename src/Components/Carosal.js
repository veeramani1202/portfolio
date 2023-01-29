import React from "react";
import { Carousel } from "antd";
import "../styles/carosal.scss";

export const Carosal = () => {
  const contentStyle = {
    height: "500px",
    color: "#fff",
    lineHeight: "160px",
    // textAlign: "center",
  };

  return (
    <div>
      <section id="Carosal">
    <div className="bg">
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            <img src="./images/quotes.jpg" alt="" height={520} width={1500} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            {" "}
            <img src="./images/computer.jpg" alt="" height={530} width={1500}/>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            {" "}
            <img src="./images/R.jpg" alt="" height={520}width={1500} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            {" "}
            <img src="./images/R.jpg" alt="" />
          </h3>
        </div>
      </Carousel>
    </div>
    </section>
    </div>
  );
};
