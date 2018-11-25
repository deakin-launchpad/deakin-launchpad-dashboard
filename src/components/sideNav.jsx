import React, { Component } from 'react';
import M from "materialize-css";

class SideNav extends Component {
  componentDidMount() {
    const options = {
      edge: "left",
      duration: 250,
      menuWidth: 300,
    }
    M.Sidenav.init(this.SideNav,options);
  }

  render() {
    return (
        <ul className="sidenav" id="mobile-demo" ref={SideNav => { this.SideNav = SideNav; }}>
          <li> <a href="#!">Home</a> </li>
          <li> <a href="#!" className="collection-item">Notification<span className="new badge blue">4</span></a></li>
          <li> <a href="#!">About</a> </li>
          <li> <a href="#!">Logout</a> </li>
        </ul>
    )
  }
}
export default SideNav;