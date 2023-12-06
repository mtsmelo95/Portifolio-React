import React from "react";
import "./Salutation.css";

const Salutation = () => {
  return (
    <div className="first-section">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="p1">Hello, i'm</p>
            <h1>Matheus Melo</h1>
            <p className="p2">
              Software Engenieer from Brazil{" "}
              <img src="./bandeiraBrasil.png" alt="Bandeira do Brasil" />{" "}
            </p>
            <p className="p3">Hover to rotate the card</p>
          </div>
          <div className="flip-card-back">
            <p className="p4">
              I'm a software engenieer from Brazil. I have serious passion for UI effects, animations and
              creating intuitive, dynamic user experiences.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salutation;
