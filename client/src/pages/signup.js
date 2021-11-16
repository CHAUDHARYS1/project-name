import React from 'react';
import { Button, Form, Grid, Segment, Header, Image, Input} from 'semantic-ui-react';

const SignUpForm = () => (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> Signup for an account
    </Header>
    <Form>
    <Segment stacked>
        <Form.Group widths='equal'>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='First name' />
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Last name' />
        </Form.Group>
        <Form.Input fluid icon='at' iconPosition='left' placeholder='E-mail address' control={Input} />
        <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
        <Button type='submit'>Submit</Button>
        </Segment>
    </Form>
  </Grid.Column>
  </Grid>
)

export default SignUpForm;
