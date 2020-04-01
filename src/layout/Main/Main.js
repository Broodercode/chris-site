import React from "react";
import Resume from "./Resume";
import Applications from "./Applications";
import About from "./About";
import Contact from "./Contact";
import Navigation from "../Navigation";

const Main = () => {
  return (
    <main>
      <Navigation />
      <Resume />
      <Applications />
      <About />
      <Contact />
    </main>
  );
};

export default Main;
