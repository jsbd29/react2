/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handelButtonClick = () => {
    navigate("/");
  };

  return (
    <div>
      <button
        style={{
          color: "rgb(255, 0, 0)",
          textStyle: "rbg(0,0,0)",
          borderRadius: "10px",
        }}
        onClick={handelButtonClick}>
        {" "}
        Go back!
      </button>
    </div>
  );
};

export default Hero;
