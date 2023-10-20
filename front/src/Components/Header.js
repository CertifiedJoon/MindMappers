import { React, useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  let activeStyle = {
    color: "#333",
  };
  let navigate = useNavigate();
  // let location = useLocation();
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") !== null
  );

  // useEffect (() => {
  //   const storedToken = localStorage.getItem('token');
  //   if (storedToken) {   // if for later stage need identify different roles for loggedIn users
  //     setToken(storedToken);
  //   }
  // }, [])

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    }
  }, [localStorage.getItem("token")]); // everytime the dependency of token in storage change, the page change immediately for different role(for example, showing button of login or logout)

  function logout() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/home");
  }

  return (
    <div className="header">
      <Navbar expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>
            <a href="" className="text-success">
              AI tool - Visual to Speech
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ml-auto">
              {/* <NavLink
                to="/"
                // style={({ isActive }) => (isActive ? activeStyle : undefined)}
                exact activeClassN  ame="active"
                forceRefresh={true}
                className="nav-link"
              >
                Courses
              </NavLink> */}

              {/* <NavDropdown title="Community Courses" id="basic-nav-dropdown">
                <NavDropdown.Item><Link  to="/submitevent">Submit Course</Link></NavDropdown.Item>
                {/* <NavDropdown.Item><Link to="/myEvents">my events</Link></NavDropdown.Item> 
              </NavDropdown> */}

              {/* {console.log('token', localStorage.getItem('token'))} */}
              {/* {loggedIn &&  */}
              <Button
                className="mx-1 px-3 bg-success"
                onClick={() => {
                  navigate("/download");
                }}
              >
                Instruction
              </Button>
              {/* } */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
