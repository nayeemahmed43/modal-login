import React from "react";
import app from "../config";

const SignOut = () => {
  return (
    <>
      <h1>Welcome to this home page</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default SignOut;