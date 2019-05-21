import React from 'react';
import { NavLink } from 'react-router-dom'

import './Header.css';

class Header extends React.Component {
    render(){
        return (
            <header id="header">
                <ul className="gnb">
                    <li><NavLink to="/login" activeClassName="active">login</NavLink></li>
                    <li><NavLink to="/movie" activeClassName="active">MovieAPI</NavLink></li>
                    <li><NavLink to="/board" activeClassName="active">boardDB</NavLink></li>
                </ul>
            </header>
        )
    }
}

export default Header;