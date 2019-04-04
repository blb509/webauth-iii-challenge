import React, { Component } from "react";
import "./App.css";
import { Route, NavLink } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import Users from "./users";
import { Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <header>
          <NavLink to="/">Home</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/signup">Register</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/signin">Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/users">Users</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/" onClick={this.logout}>
            Logout
          </NavLink>
        </header>
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Register} />
          <Route path="/signin" component={Login} />
          <Route path="/users" component={Users} />
        </main>
      </>
    );
  }

  logout = () => {
    localStorage.removeItem("token");
  };
}

function Home(props) {
  return <h1>Home</h1>;
}

export default App;
