import React from 'react';
import './App.css';
import Login from './components/Login';
import SignOut from './components/SignOut';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';


function App() {
  return (
    <AuthProvider>
      <Router>
       <div className="App">
         <h1>Hello</h1>
          <PrivateRoute exact path="/" component={SignOut} />
          <Route  exact path="/login" component={Login} />
          <Route  exact path="/signup" component={SignUp} /> 
      </div>
      </Router>
    </AuthProvider>
    
  );
}

export default App;
