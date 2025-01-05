import React, { createContext, useState, useContext } from "react";
import userContext from "../context/usercontext";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const { setdata } = useContext(userContext);

  const handlesubmit = (e) => {
    e.preventDefault();
    setdata({ username, password });
  };

  return (
    <>
      <input
        type="text"
        value={username}
        placeholder="user id"
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />{" "}
      <input
        type="text"
        value={password}
        placeholder="assword"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />{" "}
      <button onClick={handlesubmit}>submit</button>
    </>
  );
}

export default Login;
