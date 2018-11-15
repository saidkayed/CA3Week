import React, { Component } from "react"
import facade from "./apiFacade";
import LoggedIn from "./Loggedin";
import LogIn from "./Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false }
    this.state = { username: "", password: "" }
  }

  userRole = (user) => {
    this.setState({ username: user })
  }

  logout = () => {
    facade.logout();
    this.setState({ loggedIn: false });
  }

  login = (user, pass) => {
    facade.login(user, pass)
      .then(res => this.setState({ loggedIn: true }));
  }

  render() {
    return (
      <div>

        {!this.state.loggedIn ? (<LogIn username={this.state.username} password={this.state.password} userRole={this.userRole} login={this.login} />) :
          (<div>
            <LoggedIn username={this.state.username} logout={this.logout} />
          </div>)}
      </div>

    )
  }
}
export default App;
