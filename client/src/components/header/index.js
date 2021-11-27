import React from "react";
import { Container, Menu, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Container fluid>
      <Menu size="large" borderless>
        <Link to="/">
          <Image src="logo.png" size="small" />
        </Link>
        <Menu.Item>
          <Link to="/membership">
            <Button>Payment Options</Button>
          </Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Link to="/">
              <Button icon="search"></Button>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/addJob">
              <Button>Create Job</Button>
            </Link>
          </Menu.Item>
          {Auth.loggedIn() ? (
            <>
            {/* chnage this to user icon */}
              <Link to="/profile">Me</Link>
              {/* change this to a logout button */}
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}  
        </Menu.Menu>
      </Menu>
    </Container>
  );
};

export default Header;
