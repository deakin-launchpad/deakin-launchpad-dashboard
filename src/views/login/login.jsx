import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <h1>
          Login
        </h1>
        <div className='row'>
          <Link to='/home'><a class="waves-effect waves-light btn">
      
          <i className="material-icons left">cloud</i>Login
        </a></Link>

        </div>
      </div>
    );
  }
}

export default Login;
