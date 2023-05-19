import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [Emailerror, setEmailError] = useState('');
//     const [PasswordError, setPasswordError] = useState('');
//     const [success, setSuccess] = useState('');
  
//     const navigation = useNavigate();
//     const {registerUser, updateUser, user} = useContext(AuthContext);
    
//     const emailHandler = (e) => {
//       const emailInput = e.target.value;
  
//       setEmail(emailInput);
  
//       const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//       if(!regex.test(email)) {
//         setEmailError('Invlaid Email');
//       }else {
//         setEmailError('')
//       }
//     }
  
//     const passwordHandler = (e) => {
//       const passwordInput = e.target.value;
//       setPassword(passwordInput);
  
//       const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[^\s]{8,}$/;
//       if(!regex.test(password)) {
//         setPasswordError('Password should contain at least one lowercase, one uppercase, one number and one special character (@$!%*?&)')
//       }else {
//         setPasswordError('')
//       }
//     }
  
//     const submitHandler = (e) => {
//       e.preventDefault();
//       const form = e.target;
//       const name = form.name.value;
//       const photoURL = form.photo.value;
  
//       if(Emailerror) {
//         form.email.focus();
//         return;
//       }else if(PasswordError) {
//         form.password.focus();
//         return;
//       }
      
//       registerUser(email, password)
//       .then((userCredential) => {
//         setSuccess('Congratulations! You have successfully registered');
//         navigation("/login")
//       })
//       .catch((error) => {
//       });
  
//       updateUser(name, photoURL)
//       .then(() => {   
//       }).catch((error) => {
      
//     });
  
//     } 
  
    return (
        <div className="mx-auto container">
        <Form className="w-75 mx-auto">
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              required
              name="name"
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="1">
            <Form.Label>Photo url</Form.Label>
            <Form.Control
              type="text"
              required
              name="photo"
              placeholder="Enter photo url"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="2">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              className={Emailerror ? 'border-danger' : ''}
              required
              value={email}
              onChange={emailHandler}
              onClick={emailHandler}
              name="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-primary">
              {Emailerror}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="3">
            <Form.Label>Password</Form.Label>
              <Form.Control
              className={PasswordError ? 'border-danger' : ''}
              type="password"
              value={password}
              required
              onClick={passwordHandler}
              onChange={passwordHandler}
              name="password"
              placeholder="Enter Password"
            /> 
            
            <Form.Text className="text-danger">
              {PasswordError}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="4">
            <Form.Check
              type="checkbox"
              name="accept"
              label="Accept terms and condition"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mb-2 btn btn-solid-primary text-white">
            Register
          </Button>
          <p className="text-success">
              {success}
            </p>
          <br />
          <Form.Text className="text-muted ms-2">
            Already have an account? <Link to="/login">Login</Link>
          </Form.Text>
          <Form.Group className="mb-3" controlId="5"></Form.Group>
        </Form>
      </div>
    );
};

export default Register;