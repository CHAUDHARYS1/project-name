import React from 'react'
import { Button, Container, Segment, Header, Icon } from 'semantic-ui-react'
import { useParams } from 'react-router-dom';

import JobList from '../components/JobList';

import { useQuery, gql } from '@apollo/client';
import { QUERY_JOB } from '../utils/queries';


const SingleJob = props => {
    const { id: jobId } = useParams();
  
    const { loading, data } = useQuery(QUERY_JOB, {
      variables: { id: jobId }
    });
  
    const job = data?.job || {};

    console.log('data', data)
    console.log('job', job)

    return (
        <div>
            <Container>
                <Segment raised>
                    <Button primary style={{ float: "right " }} content='Apply' icon='address card' size='big' />
                    <Header as='h1'>
                        <Icon name='building' />
                        <Header.Content>
                            Job Title: {job.jobtitle}
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
export default SingleJob;