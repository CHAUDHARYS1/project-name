import React from "react";
import { Container, Menu, Image, Button } from "semantic-ui-react";

const Header = () => {
  return (
    <Container fluid>
      <Menu size="large" borderless>
        <Image src="logo.png" size="small" />
        <Menu.Menu position="right">
          <Menu.Item>
            <Button>Log In</Button>
          </Menu.Item>
          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Container>
  );
};

export default Header;
