import React from "react";
import Logo from "../imgs/squrity-removebg-preview.png";
import { Link } from "react-router-dom";
import "../App.css";

function home() {
  return (
    <div className="home">
      <div className="div-1">
        <h3>
          Security <span>Chief</span>
        </h3>

        <img src={Logo} />

        <Link to="/addname" className="btn-1">
          Play
        </Link>
      </div>
    </div>
  );
}

export default home;
