import React, { useState, useCallback } from 'react';
import { withRouter } from "react-router";
import Modal from 'react-modal';
import app from "../config";

Modal.setAppElement('#root');

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '35%',
      
    }
  };

  const Login = ({ history }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
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
        history.push("/signup");
        
      }
    }, [history]);

    return (
        <div className="container">
            { !modalIsOpen ? <button onClick={() => setModalIsOpen(true)}>Login</button> :
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
                    
                    <div id="icon">
                      <i class="fas fa-times-circle" onClick={() => setModalIsOpen(false)}></i>
                    </div>
                    <h3>Give your username and password</h3>
                    <form onSubmit={handleLogin}>
                    <label>
                        Username&nbsp;
                        <input name="email" type="email" placeholder="Username" id="email"/>
                    </label><br/><br/>
                    <label>
                        Password&nbsp;
                        <input name="password" type="password" placeholder="Password" id="password"/>
                    </label><br/><br/>
                    <button type="submit">Login</button>
                  </form>
                </Modal>}
        </div>
      );
    };
    
    export default withRouter(Login);

