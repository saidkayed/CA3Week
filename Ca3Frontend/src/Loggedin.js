import React, { Component } from "react"
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import facade from "./apiFacade";
import Roleendpoint from "./Roleendpoint";
import Home from "./Home";
import "./App.css";
import swapi from "./Swapi";
import pagination from "./Pagination"



export default class LoggedIn extends Component {
    constructor(props) {
        super(props);
        this.state = { dataFromServer: "Fetching!!" };
    }
    componentDidMount() {
        if (this.props.username === "admin" || this.props.username === "Admin") {
            facade.fetchAdminData().then(res => this.setState({ dataFromServer: res }))
        } else {
            facade.fetchData().then(res => this.setState({ dataFromServer: res }));

        }
    }
    render() {
        return (
            <Router>
                <div>
                    <ul className="header">
                        <li>
                            <NavLink exact to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Roleendpoint">Role Endpoint</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Swapi">Swapi</NavLink>
                        </li>
                        <li id="logout">
                        <button onClick={this.props.logout}>Logout</button>
                        </li>
                        <li>
                            <NavLink to="/Pagination">pagination</NavLink>
                        </li>
                    </ul>
                    <Route exact path="/"
                    render={(props) => <Home {...props} user={this.props.username} />} />
                    <Route path="/Roleendpoint" 
                    render={(props) => <Roleendpoint {...props} data={this.state.dataFromServer} />}/>
                    <Route path="/Swapi" component={swapi} />
                    <Route path="/Pagination" component={pagination} />
                   
                </div>
            </Router>
        )
    }
}

