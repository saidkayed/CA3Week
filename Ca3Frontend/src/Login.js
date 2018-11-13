import React, { Component } from "react"
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";

export default class LogIn extends Component {
  constructor(props) {
    super(props);

  }


  login = (evt) => {
    evt.preventDefault();
    this.props.userRole(this.state.username);
    this.props.login(this.state.username, this.state.password);

  }
  onChange = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value })
  }
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.login} onChange={this.onChange} >
          <input placeholder="User Name" id="username" />
          <input placeholder="Password" id="password" />
          <button>Login</button>
        </form>
      </div>
    )
  }
}