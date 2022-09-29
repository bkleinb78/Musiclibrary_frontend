import React from "react";
import './NavBar.css';
import {FaReact} from 'react-icons/fa';


const NavBar = () => {
    return (  
    <div className ="nav-background">
        <nav>
            <li className = "navbar-list"><a href="https://reactjs.org/" target="_blank"><FaReact color = 'white' size = '2.5rem'/></a></li>
        </nav>
        <div>
            <h1 className = 'musiclib-logo'>MusicLibrary</h1>
        </div>
        <div>
            <a href="ALTERNATIVE RADIO" target="_blank"><img src ="\image\radiosignal.png" className = "navbar-image" alt = "ALTERNATIVE RADIO Logo"/></a>
        </div>
    </div>
    );
}
 
export default NavBar;