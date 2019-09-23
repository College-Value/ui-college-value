import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CV from "../imgs/collegeValue.png";

const Login = props => {
    const [creds, setCreds] = useState({username: '', password: ''})

    const handleChange = e => {
        e.preventDefault()
        setCreds({...creds, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios
        .post('')
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            props.history.push('/collegePage')
        })
        .catch( err => console.log(err.response))
    }

  return (
    <div className="loginPage">
      <Link className="titleLink" to="/">
        <h1 className="LoginTitle">
          <img src={CV} width="60" height="60" />
          College Value
        </h1>
      </Link>
      <h3 className="pageDesc">Log In</h3>
      <form  onSubmit={handleSubmit} className="loginForm">
        <h2>Username:</h2>
        <input type="text" name="username" placeholder="username" onChange={handleChange}/>
        <h2>Password:</h2>
        <input type="password" name="password" placeholder="password" onChange={handleChange}/>
        <button type="submit">Log In</button>
      </form>
      <div>
        <p> Don't have an account?</p>

        <Link className="loginSignUpLink" to="/signup">
          {" "}
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
