import React, { useState, useCallback, useContext } from 'react';
import { withRouter, Redirect } from "react-router";
import Modal from 'react-modal';
import './Login.css';
import app from "../config";
import { AuthContext } from "../Auth";

Modal.setAppElement('#root');

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '35%'
    }
  };

  const Login = ({ history }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isError, setIsError] = useState(false);
  
    const handleLogin = useCallback(async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (err) {
        alert('Error: There is no user record corresponding to this identifier. Click "OK" to sign up.');
        setIsError(true);
        
      }
    }, [history]);

     const { currentUser } = useContext(AuthContext);

    if (isError) {
        return <Redirect to="/signup" />;
    }
    return (
        <div className="container">
            { !modalIsOpen ? <button onClick={() => setModalIsOpen(true)}>Login</button> :
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
                    <h3>Give your username and password</h3>
                    <form onSubmit={handleLogin}>
                    <label>
                        Email
                        <input name="email" type="email" placeholder="Email" />
                    </label>
                    <label>
                        Password
                        <input name="password" type="password" placeholder="Password" />
                    </label>
                    <button type="submit">Login</button>
                  </form>
                    <button onClick={() => setModalIsOpen(false)}>close</button>
                </Modal>}
        </div>
      );
    };
    
    export default withRouter(Login);

