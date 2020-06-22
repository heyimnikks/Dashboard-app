import React from 'react';
import { withRouter } from "react-router-dom";
import './Footer.css';

function Footer() {
    
    return(
        <footer>
        <p className="pclass text-center bg-dark text-white">@copyright cognizant.com 2020</p>
        </ footer>
    )
}
export default withRouter(Footer);