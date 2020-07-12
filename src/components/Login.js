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

    // const { currentUser } = useContext(AuthContext);

    if (isError) {
        return <Redirect to="/signup" />;
    }
    return (
        <div className="container">
            <button onClick={() => setModalIsOpen(true)}>Login</button>
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
                </Modal>
        </div>
      );
    };
    
    export default withRouter(Login);













// import React from 'react';
// import Modal from 'react-modal';
// import { useState } from 'react';
// import './Login.css';

// Modal.setAppElement('#root');

// const customStyles = {
//     content : {
//       top                   : '50%',
//       left                  : '50%',
//       right                 : 'auto',
//       bottom                : 'auto',
//       marginRight           : '-50%',
//       transform             : 'translate(-50%, -50%)',
//       width                 : '35%'
//     }
//   };

// const Login = () => {
//     const [modalIsOpen, setModalIsOpen] = useState(false);
//     return (
//         <div className="container">
//             <button onClick={() => setModalIsOpen(true)}>Login</button>
//             <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
//                 <h3>Give your username and password</h3>
//                 <button onClick={() => setModalIsOpen(false)}>close</button>
//             </Modal>
//         </div>
//     );
// };

// export default Login;























// // import React, { useState } from 'react';
// // import { Modal } from 'react-responsive-modal';

// // const Login = () => {
// //     const [login, setLogin] = useState(false);

// //     const onOpenModal = () => {
// //         setLogin(true);
// //       };
    
// //     const onCloseModal = () => {
// //         setLogin(false);
// //     };

// //     return (
// //         <div>
// //             <button  id="login"  onClick={onOpenModal}>Open modal</button>

// //              <Modal open={login} onClose={onCloseModal}>
// //                 <div className="">
// //                     <h2>Login and Get <span>Started</span></h2>
// //                     <span className="subtitle">Just fill in the form below</span>
// //                     <form>
// //                         <div className="form-group">
// //                             <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
// //                         </div>
// //                         <div className="form-group">
// //                             <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
// //                         </div>
// //                     </form>
// //                 </div>
// //             </Modal>
// //         </div>
// //     );
// // };

// // export default Login;