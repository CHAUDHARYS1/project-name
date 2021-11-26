import React, {useState} from "react";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import {
  Button,
  Form,
  Grid,
  Header,
  Container,
  Icon,
  Divider,
  Checkbox,
  Card,
} from "semantic-ui-react";
import { useMutation, gql } from "@apollo/client";


const SignUpForm = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();
    console.log("Im in handle sign up submit")
    try {
      const { data } = await addUser({
        variables: { ...formState }
      });

      Auth.login(data.addUser.token);
      console.log('User logged In', data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container className="max-width-800">
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
                    {/* <Form.Input
                      icon="user"
                      iconPosition="left"
                      label="First Name"
                      placeholder="First Name"
                      onChange={handleChange}
                    />
                    <Form.Input
                      icon="user"
                      iconPosition="left"
                      label="Last Name"
                      placeholder="Last Name"
                      onChange={handleChange}
                    /> */}
                       <Form.Input
                      icon="user"
                      iconPosition="left"
                      name="username"
                      label="UserName"
                      placeholder="username"
                      // onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Input
                    icon="at"
                    iconPosition="left"
                    label="Email address"
                    name="email"
                    placeholder="Email address"
                    // onChange={handleChange}
                  />
                  {/* <Form.Input
                    icon="building"
                    iconPosition="left"
                    label="Company name"
                    placeholder="Company name"
                    onChange={handleChange}
                  /> */}
                  <Form.Input
                    icon="lock"
                    iconPosition="left"
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    // onChange={handleChange}
                  />
                  <Form.Input
                    icon="lock"
                    iconPosition="left"
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm Password"
                    // onChange={handleChange}
                  />
                  <Form.Field>
                    <Checkbox label="Signing up signifies that you have read and agree to the Terms of Service and our Privacy Policy. Cookie Preferences." />
                  </Form.Field>
                  <Button type="submit" onClick={handleFormSubmit}>Submit</Button>
                </Form>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default SignUpForm;
