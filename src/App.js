import React from "react";
import "./App.css";

import Header from "./components/Header.jsx";
import Middle from "./components/Middle.jsx";
import Footer from "./components/Footer.jsx";
import Blog from "./components/Blog.jsx";
import Banking from "./components/Banking.jsx";
import Automobiles from "./components/Automobiles.jsx";
import Healthcare from "./components/Healthcare.jsx";
import ECommerce from "./components/ECommerce.jsx";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      {/* <section className="App-middle">
        <Middle />
      </section> */}
      <ECommerce />
      <section className="App-footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
