import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../src/components/header/index";
import Footer from "../src/components/footer/index";
import Index from "./pages/index";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Socials from "./pages/socials";

import './App.css';

function App() {
  return (
    
    <Router>
      <Header />
      <Route exact path="/" component={Index} />
      <Route exact path="/index" component={Index} />
      <Route exact path="/react-portfolio" component={Index} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/socials" component={Socials} />
      <Footer/>
    </Router>
  );
}

export default App;