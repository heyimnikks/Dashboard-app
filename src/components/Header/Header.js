import React from 'react';
import { withRouter } from "react-router-dom";

function Header(props) {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    const title = capitalize(props.location.pathname.substring(1,props.location.pathname.length));
    return(
        <header>
        <nav className="navbar navbar-dark text-light">
            <div className="row col-12 d-flex justify-content-center">
                <span className="h3">{props.title || title}</span>
            </div>
        </nav>
        </header>
    )
}
export default withRouter(Header);