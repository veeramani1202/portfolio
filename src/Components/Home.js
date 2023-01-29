import React, { useState } from "react";
import "../styles/home.scss";
import Login from "./login";
import Registerform from "./Registerform";

export const Home = () => {
  const [isLogin, setisLogin] = useState(false);

  const handleChange = (value) => {
    setisLogin(value);
  };

  return (
    <div>
      <meta name="Viewport" content="width=device-width, initial-scale=1" />
      <div className="split left">
        <div className="centered">
          {isLogin ? (
            <Registerform handleChange={handleChange} isLogin={isLogin} />
          ) : (
            <Login handleChange={handleChange} isLogin={isLogin} />
          )}
        </div>
      </div>
      <div className="split right">
        <div className="column1"></div>
        <div className="centered"></div>
        <h1 className="center">
          Welcome to <br /> my Portfolio
        </h1>
        <p className="style">
          Fuse helps developers to build organized and well coded dashboards
          full of
          <br />
          beautiful and rich modules. Join us and start building your
          application today.
        </p>
      </div>
    </div>
  );
};
