import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Oindrila's Pizzeria offers its customers a wide range of pizzas products with varying crusts and sizes, pasta-based dishes, chicken wings, boneless chicken, oven-baked sandwiches, bread side items, soft drinks, and desserts.
        </p>
      </div>
    </div>
  );
}

export default About;
