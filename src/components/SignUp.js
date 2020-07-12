import React, { useCallback, useState } from "react";
import { withRouter } from "react-router";
import app from "../config";
import Modal from 'react-modal';

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


const SignUp = ({ history }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);


  return (
    <div className="container">
        <button onClick={() => setModalIsOpen(true)}>Sign up</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
                <h3>Create an Account</h3>
                <form onSubmit={handleSignUp}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" />
                </label><br></br>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Sign Up</button>
              </form>
                <button onClick={() => setModalIsOpen(false)}>close</button>
            </Modal>
    </div>
  );
};

export default withRouter(SignUp);