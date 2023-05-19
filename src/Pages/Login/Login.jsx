import { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Lottie from "lottie-react";
import regianimation from "../../assets/134945-zpunet-icon.json"

const Login = () => {
    const {loginUser, loginWithGoogle, loginWithGithub, loading} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    const loginHandler = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then((userCredential) => {
            navigate(from, {replace: true})
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          });      
    }

    const handleGithubSignIn = () => {
      
        loginWithGithub()
        .then((result) => {
            if(result) {
                navigate(from, {replace: true})
            }
          
          }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
           
          });
    }

    const handleGoogleSignIn = () => {
        
        loginWithGoogle()
        .then((result) => {
            const user = result.user;
            navigate(from, {replace: true})
          
          }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
           
          });
    }

    return (
        <div className="">
      <Container fluid>
        <Row>
          <Col className="vertical-height d-none d-md-block" md={5}>
            <div className="p-md-5">
                <h3>Get more things done with Loggin platform.</h3>
                <Lottie animationData={regianimation} loop={true}/>
            </div>
          </Col>
          <Col className="bg-tertiary vertical-height" md={7}>
            <div className="p-md-5 w-75 mx-auto">
              <button className="btn btn-link text-white">Login</button>
              <button className="btn btn-link text-white">Register</button>
              <Form className="" onSubmit={loginHandler}>
                <Form.Group className="mb-3" controlId="">
                  <Form.Label className="text-white">Name</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    name="name"
                    placeholder="Enter Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="1">
                  <Form.Label className="text-white">Photo url</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    name="photo"
                    placeholder="Enter photo url"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="2">
                  <Form.Label className="text-white">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    className={Emailerror ? "border-danger" : ""}
                    required
                    value={email}
                    onChange={emailHandler}
                    onClick={emailHandler}
                    name="email"
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-primary">{Emailerror}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="3">
                  <Form.Label className="text-white">Password</Form.Label>
                  <Form.Control
                    className={PasswordError ? "border-danger" : ""}
                    type="password"
                    value={password}
                    required
                    onClick={passwordHandler}
                    onChange={passwordHandler}
                    name="password"
                    placeholder="Enter Password"
                  />

                  <Form.Text className="text-danger">{PasswordError}</Form.Text>
                </Form.Group>
                <Button
                  type="submit"
                  className="mb-2 bg-white text-tertiary border-0"
                >
                  Register
                </Button>
                <p className="text-success">{success}</p>
                <br />
                <Form.Text className="ms-2 text-white">
                  Already have an account? <Link className="text-white text-decoration-underline" to="/login">Login</Link>
                </Form.Text>
                <Form.Group className="mb-3" controlId="5"></Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    );
};

export default Login;