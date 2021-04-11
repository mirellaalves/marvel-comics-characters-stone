import React, { Component } from "react";
import logo from "../images/app-logo.png";
import "../styles/login.css"

class Login extends Component {
  render () {
    return (
      <div className="loginContainer">
        <img className="loginLogo" src={logo} alt="App logo" />
        <form className="loginForm">
          <label htmlfor="email">
            Email<br />
            <input className="loginInput" id="email" type="email"/><br />
          </label>
          <label htmlfor="password">
            Senha<br />
            <input className="loginInput" id="password" type="password"/><br />
          </label>
          <button className="loginSubmit" type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Login;
