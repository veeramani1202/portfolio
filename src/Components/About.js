import React from "react";
import Navbar from "./Navbar";
import "../styles/about.scss";

import { Carosal } from "./Carosal";
import Service from "./Service";
import Contact from "./Contact";
import Tablelist from "./Tablelist";

const About = () => {
  return (
    <div>
      <Navbar />
      <Carosal />
      <section id="About">
        <div className="body">
          <div className="section">
            <p className="content">I'm Veeramanikandan</p>
          </div>
        </div>
      </section>
      <Service />
      <h1 className="content"> USER LIST</h1>
      <Tablelist />

      <Contact />
    </div>
  );
};
export default About;
