import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Container,
  Menu,
  Icon,
  Divider,
  Checkbox,
  Card,
} from "semantic-ui-react";

const SignUpForm = () => (
  // https://signup.heroku.com
  <Container className="max-width-800">
    {/* TODO: Logo on the left top side and 'Already have an account?' 'Log in button on the right side */}
    <div className="margin-0 margin-top-20">
      <Menu secondary>
        <Image src="logo.png" size="small" />
        <Menu.Menu position="right">
          <Menu.Item>
            <p>Already have an account?</p>
          </Menu.Item>
          <Menu.Item name="Log in">
            <Button content="Login" primary />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
    {/* TODO: 'Sign up for free and experience Want a Job? today */}
    <div className="text-center margin-top-50">
      <Header as="h1">
        <Header.Content>
          Sign up for free
          <Header.Subheader>
            and experience our platform today!
          </Header.Subheader>
        </Header.Content>
      </Header>
    </div>
    {/*  */}
    <Grid columns="equal" divided className="margin-top-50">
      <Grid.Row>
        <Grid.Column>
          <Header as="h3">
            <Icon name="plug" />
            <Header.Content>Free Trial</Header.Content>
            <Header.Subheader className="margin-top-20">
              Begin using our application with a free 30 day trial.
            </Header.Subheader>
          </Header>
          <Divider hidden /> <Divider hidden />
          <Divider hidden />
          <Header as="h3">
            <Icon name="plug" />
            <Header.Content>Uptime Guarantee</Header.Content>
            <Header.Subheader className="margin-top-20">
              Create apps, connect databases and add-on services, and
              collaborate on your apps, for free.
            </Header.Subheader>
          </Header>
          <Divider hidden /> <Divider hidden />
          <Divider hidden />
          <Header as="h3">
            <Icon name="plug" />
            <Header.Content>Uptime Guarantee</Header.Content>
            <Header.Subheader className="margin-top-20">
              Create apps, connect databases and add-on services, and
              collaborate on your apps, for free.
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Card fluid>
            <Card.Content>
              <Form>
                <Form.Group fluid columns="equal" widths="equal">
                  <Form.Input
                    icon="user"
                    iconPosition="left"
                    label="First Name"
                    placeholder="First Name"
                  />
                  <Form.Input
                    icon="user"
                    iconPosition="left"
                    label="Last Name"
                    placeholder="Last Name"
                  />
                </Form.Group>
                <Form.Input
                  icon="at"
                  iconPosition="left"
                  label="Email address"
                  placeholder="Email address"
                />
                <Form.Input
                  icon="building"
                  iconPosition="left"
                  label="Company name"
                  placeholder="Company name"
                />
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  label="Password"
                  type="password"
                  placeholder="Password"
                />
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm Password"
                />
                <Form.Field>
                  <Checkbox label="Signing up signifies that you have read and agree to the Terms of Service and our Privacy Policy. Cookie Preferences." />
                </Form.Field>
                <Button type="submit">Submit</Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default SignUpForm;
