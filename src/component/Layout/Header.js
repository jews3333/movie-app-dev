import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

import './Header.css';

class Header extends React.Component {
    render(){
        const { visible } = this.props;

        if(!visible) return null;

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

export default connect(
    (state) => ({
        visible: state.base.getIn(['header', 'visible'])
    }),
    (dispatch) => ({

    })
)(Header);