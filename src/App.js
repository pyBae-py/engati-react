import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Middle from "./components/Middle.jsx";

import Blog from "./components/Blog.jsx";
import Banking from "./components/Banking.jsx";
import Automobiles from "./components/Automobiles.jsx";
import Healthcare from "./components/Healthcare.jsx";
import ECommerce from "./components/ECommerce.jsx";
import CustomerSupport from "./components/CustomerSupport";
import NewsMedia from "./components/NewsMedia.jsx";
import RealEstate from "./components/RealEstate.jsx";
import Education from "./components/Education.jsx";
import Travel from "./components/Travel.jsx";
import Telecom from "./components/Telecom.jsx";
import HumanResources from "./components/HumanResources.jsx";
import SalesMarketing from "./components/SalesMarketing.jsx";
import ServiceManagement from "./components/ServiceManagement.jsx";
import TransactionEnquiry from "./components/TransactionEnquiry";
import ConversationalCommerce from "./components/ConversationalCommerce";
import Features from "./components/Features.jsx";


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

        <Switch>
          <Route exact path="/">
            <Middle />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/telecom">
            <Telecom />
          </Route>
          <Route path="/realestate">
            <RealEstate />
          </Route>
          <Route path="/travel">
            <Travel />
          </Route>
          <Route path="/ecommerce">
            <ECommerce />
          </Route>
          <Route path="/customer-support">
            <CustomerSupport />
          </Route>
          <Route path="/news-media">
            <NewsMedia />
          </Route>
          <Route path="/banking">
            <Banking />
          </Route>
          <Route path="/automobiles">
            <Automobiles />
          </Route>
          <Route path="/healthcare">
            <Healthcare />
          </Route>
          <Route path="/humanresources">
            <HumanResources />
          </Route>
          <Route path="/salesmarketing">
            <SalesMarketing />
          </Route>
          <Route path="/servicemanagement">
            <ServiceManagement />
          </Route>
          <Route path="/transactionenquiry">
            <TransactionEnquiry />
          </Route>
          <Route path="/conversationalcommerce">
            <ConversationalCommerce />
          </Route>

          <Route path="*">
            <Middle />
          </Route>
        </Switch>

        <section className="App-footer">
          <Footer />
        </section>
      </div>
    </Router>
  );
}

export default App;
