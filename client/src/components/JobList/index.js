import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, Button, Icon } from "semantic-ui-react";


const JobList = ({ jobs, jobtitle }) => {
  if (!jobs.length) {
    return <h3>No Jobs Yet</h3>;
  }
  
  const extra = (
    <Link to="/job">
      <Button animated primary>
        <Button.Content visible>Apply Now</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    </Link>
    );

  return (
    <div className="display-jobs">
      <Grid columns="equal">
        {jobs &&
          jobs.map((job) => (
            <div key={job._id} className="display-jobs">
              <Grid.Column>
                <Card
                  header={job.jobtitle}
                  description={job.description}
                  meta="Microsoft"
                  extra={    <Link to={`/job/${job._id}`}>
                  <Button animated primary>
                    <Button.Content visible>Apply Now</Button.Content>
                    <Button.Content hidden>
                      <Icon name="arrow right" />
                    </Button.Content>
                  </Button>
                </Link>}
                />
              </Grid.Column>
            </div>
          ))}
      </Grid>
    </div>
  );
};

export default JobList;
