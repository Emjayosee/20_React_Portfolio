import React from "react";
import Footer from "./components/Footer";
// import { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import AboutPage from "./pages/About";
import PortfolioPage from "./pages/Portfolio";
import ContactPage from "./pages/Contact";
import PublicationsPage from "./pages/Publications";

function Header(){
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">Michael J. O'Connor</NavLink>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" className="nav-link" activeClassName="active">Portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/publications" className="nav-link" activeClassName="active">Publications</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

function App() { 

  // html
  return (
    <>
      <Router> 
        <Header />
        <Route exact path={["/","/about"]} component={AboutPage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/publications" component={PublicationsPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Router>
      <Footer />
    </>
  );
}

export default App;

