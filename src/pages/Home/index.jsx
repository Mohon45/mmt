import React from "react";
import About from "./components/About";
import Events from "./components/Events";
import Partner from "./components/Partner";
import Sustainability from "./components/Sustainability";
import WhyMmt from "./components/WhyMmt";

const Home = () => {
  return (
    <div>
      <h1>This is Home Page</h1>
      <About />
      <Partner />
      <WhyMmt />
      <Sustainability />
      <Events />
    </div>
  );
};

export default Home;
