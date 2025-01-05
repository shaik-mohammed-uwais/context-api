import React, { useContext } from "react";
import userContext from "../context/usercontext";

function Profile() {
  const { data } = useContext(userContext);
  return !data.username ? (
    <h2>please login</h2>
  ) : (
    <h2> welcome : {data.username}</h2>
  );
}

export default Profile;
