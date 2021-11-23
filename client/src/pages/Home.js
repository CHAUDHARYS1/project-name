import React from "react";
import {
  Container,
  Input,
  Segment,
  Header,
  Dropdown,
  Grid,
  Divider,
  Sticky,
  Label
} from "semantic-ui-react";
import JobList from "../components/JobList"

const options = [
  { key: 1, text: "Filter by date", value: 1 },
  { key: 2, text: "Filter by alphabet", value: 2 },
  { key: 3, text: "Filter by Salary range", value: 3 },
];
const renderLabel = (label) => ({
  color: "blue",
  content: `Customized label - ${label.text}`,
  icon: "check",
});

const Home = () => {
  return (
    <Container>
      <div className="margin-top-50">
        <Header as="h2">
          <Header.Content>
            Want a Job?
            <Header.Subheader>
              Search for a job by keyword or postion
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Input
          icon={{ name: "search", circular: true, link: true }}
          fluid
          placeholder="Search..."
        />
      </div>

      <Divider />

      <Grid className="margin-top-20">
        <Grid.Column width={4}>
          <Sticky>
            <Segment>
              <Label as='f' color="green" ribbon>Filters</Label>

              <Dropdown
                multiple
                selection
                fluid
                options={options}
                placeholder="Active filters"
                renderLabel={renderLabel}
                className="margin-top-20"
              />
            </Segment>
          </Sticky>
        </Grid.Column>
        <Grid.Column width={12}>
          <Grid container stackable columns={3} divided="vertically">
            <Grid.Row>
              {/* Repeating card */}
                <JobList />
              {/* End Repeating card */}
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid>
    </Container>
  );
};
export default Home;
