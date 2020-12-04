import { BrowserRouter as Router, Route } from "react-router-dom"

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Home from "./components/pages/home"
import Portfolio from "./components/pages/portfolio"
import Contact from "./components/pages/contact"
import Navbar from "./components/header"
import Footer from "./components/footer"

function App() {
  
  return (
    <Router>

      <div>
        <Navbar />
        <Route exact path="/src/components/pages/home.js" component = { Home } />
        <Route exact path="/src/components/pages/portfolio.js" component = { Portfolio } />
        <Route exact path="/src/components/pages/contact.js" component=  { Contact } /> 
        <Footer />
      </div>

    </Router>
  );
}

export default App;