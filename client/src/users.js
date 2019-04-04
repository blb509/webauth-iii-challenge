import React from "react";
import axios from "axios";

import Auth from "./auth";

class Users extends React.Component {
  state = {
    users: []
  };

  render() {
    return (
      <>
        <h2>Users</h2>
        <ul>
          {this.state.users.map(u => (
            <li key={u.id}>{u.username}</li>
          ))}
        </ul>
      </>
    );
  }

  componentDidMount() {
    const endpoint = `/users`;
    axios
      .get(endpoint)
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(error => {
        console.error("USERS ERROR", error);
      });
  }
}

export default Auth(Users);
