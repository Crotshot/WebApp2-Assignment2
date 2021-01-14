import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";

const LoginPage = props => {
  const context = useContext(AuthContext)
  context.isAuthenticated = false;
  
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  const { from } = props.location.state || { from: { pathname: "/" } };
  //context.authenticate(userName, password);
  if (context.isAuthenticated === true) {
    return <Redirect to={from} />;
  }

  const login = () => {
    context.authenticate(userName, password)
  };

  return (
    <>
      <h2>Login page</h2>
      <p>You must log in to view the protected pages </p>
      <input id="username" placeholder="user name" onChange={e => {
        setUserName(e.target.value);
      }}></input><br />
      <input id="password" type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input><br />
      {/* Login web form  */}
      <button onClick={login}>Log in</button>
      <p>Not Registered?
      <Link to="/signup">Sign Up!</Link></p>
    </>
  );
};

export default LoginPage;