import React from "react";
import app from "../config";

const SignOut = () => {
  return (
      <div className="container">
           <h2 id="greetings">Welcome to this home page</h2>
           <button onClick={() => app.auth().signOut()}>Sign out</button>
      </div>
  );
};

export default SignOut;