import { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Lottie from "lottie-react";
import { FaGoogle } from "react-icons/fa";
import regianimation from "../../assets/134945-zpunet-icon.json";

const Login = () => {
  const { loginUser, loginWithGoogle}  = useContext(AuthContext); //loading }
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const location = useLocation();
  // const from = location?.state?.from?.pathname || "/";

  const loginHandler = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(() => {
        navigate("/");
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // const handleGithubSignIn = () => {
  //   loginWithGithub()
  //     .then((result) => {
  //       navigate("/");
  //       // if (result) {
  //       //   navigate(from, { replace: true });
  //       // }
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       setError(errorMessage);
  //     });
  // };

  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then(() => {
        navigate("/");
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="">
      <Container fluid>
        <Row>
          <Col className="vertical-height d-none d-md-block" md={5}>
            <div className="p-md-5">
              <h3>Get more things done with Loggin platform.</h3>
              <Lottie animationData={regianimation} loop={true} />
            </div>
          </Col>
          <Col className="bg-tertiary vertical-height" md={7}>
            <div className="p-md-5 w-75 mx-auto">
              <Form className="" onSubmit={loginHandler}>
                <Form.Group className="mb-3" controlId="2">
                  <Form.Label className="text-white">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    name="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="3">
                  <Form.Label className="text-white">Password</Form.Label>
                  <Form.Control
                    type="password"
                    required
                    name="password"
                    placeholder="Enter Password"
                  />
                </Form.Group>
                <Button
                  type="submit"
                  className="mb-2 bg-white text-tertiary border-0 fw-bold"
                >
                  Login
                </Button>
                <div>
                  <Button
                    variant="primary"
                    type="submit"
                    className="mb-2 btn btn-primary text-white"
                    onClick={handleGoogleSignIn}
                  >
                    <FaGoogle /> Login with google
                  </Button>
                </div>

                <Form.Text className="ms-2 text-white">
                  Do not have an an account?{" "}
                  <Link
                    className="text-white text-decoration-underline"
                    to="/register"
                  >
                    Register
                  </Link>
                </Form.Text>
                <Form.Group className="mb-3" controlId="5">
                  <Form.Text>{error}</Form.Text>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
