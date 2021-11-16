import React from 'react'
import { Button, Container, Divider, Form, Grid, Segment, Header, Icon } from 'semantic-ui-react'

const LoginForm = () => (
  <Container>
    <Grid.Row style={{ maxWidth: 700}} className='margin-0 margin-top-100' >
      <Header as='h2'>
        <Icon name='user circle' />
        <Header.Content>
          Login
          <Header.Subheader>Please enter your email and password</Header.Subheader>
        </Header.Content>
      </Header>
      <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <Form>
              <Form.Input icon='at' iconPosition='left' label='Email address' placeholder='Email address' />
              <Form.Input icon='lock' iconPosition='left' label='Password' type='password'/>
              <Button content='Login' primary />
            </Form>
          </Grid.Column>
          <Grid.Column verticalAlign='middle'>
            <p className="text-center">New to us? </p>
            <p className="text-center text-bold">Register for an account!</p>
            <Button content='Sign up' icon='signup' size='big' />
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>
    </Grid.Row>
  </Container>
)

export default LoginForm
