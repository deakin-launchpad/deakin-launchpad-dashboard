import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">Logo</a>
            <ul className="right hide-on-med-and-down">
             <li> <Link to='/login'>Logout</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
