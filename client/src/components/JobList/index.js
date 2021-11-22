import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, Button, Icon } from "semantic-ui-react";


//  example of how a job list would look like
const extra = (
    <Link to="/login">
    <Button animated primary>
      <Button.Content visible>Apply Now</Button.Content>
      <Button.Content hidden>
        <Icon name="arrow right" />
      </Button.Content>
      
    </Button>
    </Link>
  );

const JobList = () => {
    //  add the following code if no job list = empty
    // if(!jobs.length){
    //     return <h3>No Jobs Yet</h3>;
    // }

    return (
        <Grid.Column>
        <Card
          header="UX Designer"
          description="At Microsoft, we believe that UX design only becomes great when language is straightforward, clear, and designed to flow naturally from one concept to the next. That’s where you come in."
          meta="Microsoft"
          extra={extra}
        />
      </Grid.Column>   
    )
}

export default JobList;