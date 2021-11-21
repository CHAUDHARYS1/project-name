import React from "react";
import {
  Icon,
  Container,
  Input,
  Button,
  Segment,
  Header,
  Card,
  Dropdown,
  Grid,
  Divider,
  Sticky,
  Label
} from "semantic-ui-react";

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

//  example of how a job list would look like
const extra = (
  <Button animated primary>
    <Button.Content visible>Apply Now</Button.Content>
    <Button.Content hidden>
      <Icon name="arrow right" />
    </Button.Content>
  </Button>
);

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
              <Grid.Column>
                <Card
                  header="UX Designer"
                  description="At Microsoft, we believe that UX design only becomes great when language is straightforward, clear, and designed to flow naturally from one concept to the next. That’s where you come in."
                  meta="Microsoft"
                  extra={extra}
                />
              </Grid.Column>
              {/* End Repeating card */}
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid>
    </Container>
  );
};
export default Home;
