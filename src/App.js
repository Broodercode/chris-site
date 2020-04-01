import React from "react";

import "./sass/main.scss";

import Header from "./layout/Header";
import Main from "./layout/Main/Main";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
