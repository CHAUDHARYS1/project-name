import React from "react";
import { Container, Menu, Image, Button } from "semantic-ui-react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <Container fluid>
      <Menu size="large" borderless>
        <Link to="/"><Image src="logo.png" size="small" /></Link>
        <Menu.Item>
            <Link to="/membership"><Button>Payment Options</Button></Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/createJob"><Button>Create Job</Button></Link>
          </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Link to="/login"><Button>Log In</Button></Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/signup"><Button primary>Sign Up</Button></Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Container>
  );
};

export default Header;
