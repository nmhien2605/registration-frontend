import React, { useEffect, useState } from "react";

import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [userData, setUserDate] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const registerUser = () => {
    console.log(userData);
    axios
      .post("https://registration-backend.vercel.app/users/register", {
        username: userData.username,
        email: userData.email,
        password: userData.password,
        confirmPassword: userData.confirmPassword,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div>
        <div>Username</div>
        <input
          value={userData.username}
          onChange={(e) =>
            setUserDate({ ...userData, username: e.target.value })
          }
        />
      </div>
      <div>
        <div>Email</div>
        <input
          value={userData.email}
          onChange={(e) => setUserDate({ ...userData, email: e.target.value })}
        />
      </div>
      <div>
        <div>Password</div>
        <input
          value={userData.password}
          onChange={(e) =>
            setUserDate({ ...userData, password: e.target.value })
          }
        />
      </div>
      <div>
        <div>Confirm Password</div>
        <input
          value={userData.confirmPassword}
          onChange={(e) =>
            setUserDate({ ...userData, confirmPassword: e.target.value })
          }
        />
      </div>
      <button onClick={() => registerUser()}>Register</button>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
