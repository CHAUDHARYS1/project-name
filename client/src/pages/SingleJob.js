import React from 'react'
import { Button, Container, Divider, Form, Grid, Segment, Header, Icon, TextArea } from 'semantic-ui-react'
const SingleJob = () => {
    return (
        <div>
            <Container>
                <Segment raised>
                    <Button primary style={{ float: "right " }} content='Apply' icon='address card' size='big' />
                    <Header as='h1'>
                        <Icon name='building' />
                        <Header.Content>
                            Job Title
                            <Header.Subheader>Company Name:</Header.Subheader>
                            <Header.Subheader>Website:</Header.Subheader>
                            <Header.Subheader>Date Posted:</Header.Subheader>
                            <Header.Subheader>Start Date:</Header.Subheader>
                            <Header.Subheader>Type of Position:</Header.Subheader>
                        </Header.Content>
                    </Header>
                    <div>
                        <h3>
                            Company Description:
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar
                            ultricies, purus lectus malesuada libero, sit amet commodo magna
                            eros quis urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus. Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                            Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                            Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc.
                            Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                        </p>
                        <h3>
                            Job Description:
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar
                            ultricies, purus lectus malesuada libero, sit amet commodo magna
                            eros quis urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus. Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                            Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                            Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc.
                            Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                        </p>
                        <h3>
                            Requirements:
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar
                            ultricies, purus lectus malesuada libero, sit amet commodo magna
                            eros quis urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus. Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                            Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                            Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc.
                            Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                        </p>
                        <h3>
                            Salary/Pay and Benefits:
                        </h3>
                        <p>Starting Salary/Pay: </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar
                            ultricies, purus lectus malesuada libero, sit amet commodo magna
                            eros quis urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus. Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                            Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                            Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc.
                            Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                        </p>
                    </div>
                </Segment>
            </Container>
        </div>
    )
}
export default SingleJob