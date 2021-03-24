import React from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import AboutPage from "./pages/About";
import CodingPage from "./pages/Coding";
import GAARTPage from "./pages/GAART";
import MjocPage from "./pages/Weblinks";
import GTMPage from "./pages/GAAR_THE_MUSICAL";
import PublicationsPage from "./pages/Publications";
import ContactPage from "./pages/Contact";
import './index.css'


function Header(){
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-gray">
      <NavLink className="navbar-brand"  activeStyle={{ color: 'white' }} to="/">Michael J. O'Connor, CA, CPA (Artist, Fiscal Pundit, Tax Activist and now Coder)</NavLink>
      <div>
        <ul className="navbar-nav">
          {/* <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active" activeStyle={{ color: 'red' }} color="grey">About</NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink to="/coding" className="nav-link" activeClassName="active" activeStyle={{ color: 'yellow' }} color="green">Coding</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/publications" className="nav-link" activeClassName="active" activeStyle={{ color: 'yellow' }}>Publications</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/GAART" className="nav-link" activeClassName="active" activeStyle={{ color: 'yellow' }} >GAART</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/weblinks" className="nav-link" activeClassName="active" activeStyle={{ color: 'yellow' }} >MjocWebsites</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/gtm" className="nav-link" activeClassName="active" activeStyle={{ color: 'yellow' }} >GAAR:The Musical</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" activeClassName="active" activeStyle={{ color: 'yellow' }} >Contact</NavLink>
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
        <Route exact path="/coding" component={CodingPage} />
        <Route exact path="/publications" component={PublicationsPage} />
        <Route exact path="/gaart" component={GAARTPage} />
        <Route exact path="/weblinks" component={MjocPage} />
        <Route exact path="/gtm" component={GTMPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Router>
      <Footer />
    </>
  );
}

export default App;

