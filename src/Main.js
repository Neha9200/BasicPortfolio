import React, {Component} from "react";
import {Route, NavLink, Link, HashRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import {library} from "@fortawesome/fontawesome-svg-core";
import {
    fab,
    faTwitterSquare,
    faFacebook,
    faLinkedin,
    faGithub
} from "@fortawesome/free-brands-svg-icons";

library.add(fab, faTwitterSquare, faFacebook, faGithub, faLinkedin);

 class Main extends Component {
     render() {
        return(
            <HashRouter>
            <div>
            <div>
                <Link className="logo" to="/">Neha M R</Link>
            </div>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contacts">Contact</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/About" component={About}></Route>
                    <Route path="/Contacts" component={Contacts}></Route>
                </div>
            </div>
            </HashRouter>
        );
     }
 }

 export default Main;