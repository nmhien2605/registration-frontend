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
  const [msg, setMsg] = useState("");

  const registerUser = () => {
    axios
      .post("https://registration-backend.vercel.app/users/register", {
        username: userData.username,
        email: userData.email,
        password: userData.password,
        confirmPassword: userData.confirmPassword,
      })
      .then((response) => {
        setMsg(response.data.massage);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div className="form">
        <h1>
          Registration Form
        </h1>
        <div>
          <div>Username</div>
          <input
            className="card"
            value={userData.username}
            onChange={(e) =>
              setUserDate({ ...userData, username: e.target.value })
            }
          />
        </div>
        <div>
          <div>Email</div>
          <input
            className="card"
            value={userData.email}
            onChange={(e) =>
              setUserDate({ ...userData, email: e.target.value })
            }
          />
        </div>
        <div>
          <div>Password</div>
          <input
            className="card"
            value={userData.password}
            onChange={(e) =>
              setUserDate({ ...userData, password: e.target.value })
            }
          />
        </div>
        <div>
          <div>Confirm Password</div>
          <input
            className="card"
            value={userData.confirmPassword}
            onChange={(e) =>
              setUserDate({ ...userData, confirmPassword: e.target.value })
            }
          />
        </div>
        <div>
          {msg}
        </div>
        <div>
          <button onClick={() => registerUser()}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
