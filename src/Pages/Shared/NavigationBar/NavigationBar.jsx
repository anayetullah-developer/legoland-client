import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="light" className="navbar-bg" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <h2 className="m-0"><span className="text-special-color">LegoLand</span> <span className="text-tertiary">Market</span></h2>
            <p className="text-uppercase tagline">Unleash Your Inner Builder</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-md-auto my-2 my-lg-0"
              navbarScroll
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "navlink me-md-4 mb-md-0 mb-2 text-primary"
                    : "navlink me-md-4 mb-md-0 mb-2 text-dark"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "navlink me-md-4 mb-md-0 mb-2 text-primary"
                    : "navlink me-md-4 mb-md-0 mb-2 text-dark"
                }
              >
                All Toys
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "navlink me-md-4 mb-md-0 mb-2 text-primary"
                    : "navlink me-md-4 mb-md-0 mb-2 text-dark"
                }
              >
                My Toys
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "navlink me-md-4 mb-md-0 mb-2 text-primary"
                    : "navlink me-md-4 mb-md-0 mb-2 text-dark"
                }
              >
                Add a Toy
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "navlink me-md-4 mb-md-0 mb-2 text-primary"
                    : "navlink me-md-4 mb-md-0 mb-2 text-dark"
                }
              >
                Blog
              </NavLink>

            </Nav>
            {/* {user ? (
              <>
                {!user.photoURL ? (
                  <FaUserTie className="user me-md-3" />
                ) : (
                  <Image
                    src={user.photoURL}
                    className="profile-picture mx-md-3"
                    roundedCircle
                    title={user.displayName ? user.displayName : ""}
                  />
                )} */}

                {/* <Link to="/login">
                <Button
                  className="btn btn-outline-primary d-block d-md-inline-block mt-3 mt-md-0"
                  onClick={handleLogout}
                >
                  Log out
                </Button>
                </Link>
              </>
            ) : ( */}
              <Link to="/login">
                <Button className="btn btn-solid-primary py-2 px-4 d-block d-md-inline-block mt-2 mt-md-0">
                  Login
                </Button>
              </Link>
            {/* )} */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;

