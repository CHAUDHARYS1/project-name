import React from 'react'
import { Button, Container, Input, Image, Form, Segment, Header, Icon, Dropdown, Grid } from 'semantic-ui-react'
const options = [
    { key: 1, text: '', value: 1 },
    { key: 2, text: '', value: 2 },
    { key: 3, text: '', value: 3 },
    { key: 3, text: 'Three', value: 3 },
    { key: 3, text: 'Three', value: 3 },
    { key: 3, text: 'Three', value: 3 },
    { key: 3, text: 'Three', value: 3 },
    { key: 3, text: 'Three', value: 3 },
    { key: 3, text: 'Three', value: 3 },
    { key: 3, text: 'Three', value: 3 },
    { key: 3, text: 'Three', value: 3 },
    { key: 3, text: 'Three', value: 3 },
    { key: 3, text: 'Three', value: 3 },
    { key: 3, text: 'Three', value: 3 },
]
const renderLabel = (label) => ({
    color: 'blue',
    content: `Customized label - ${label.text}`,
    icon: 'check',
})
const items = [
    {
        header: 'Project Report - April',
        description:
            'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
    },
    {
        header: 'Project Report - May',
        description:
            'Bring to the table win-win survival strategies to ensure proactive domination.',
        meta: 'ROI: 34%',
    },
    {
        header: 'Project Report - June',
        description:
            'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
        meta: 'ROI: 27%',
    },
]
const HomePage = () => {
    return (
        <div style={{ paddingBottom: "20%", paddingtop: "2%" }}>
            <Container >

                <Segment raised style={{ paddingLeft: "34%" }}>
                    <Header as='h2' style={{ padding: "2%" }}>
                        <Icon name='search' />
                        <Header.Content>
                            Want a Job?
                            <Header.Subheader>Search for a job by keyword or postion</Header.Subheader>
                        </Header.Content>
                    </Header>
                    <Input size="big" style={{ display: "inline", }} icon='search' placeholder='Search...' />
                    <Button size="big" primary>Search</Button>
                </Segment>
                <Form>
                    <Segment floated='left' style={{ width: "21%", paddingBottom: "28%" }}>
                        <a class="ui teal ribbon label">Filters</a>
                        {/* <div class="ui small icon input">
                        <input type="text" placeholder="Add a Filter?" style={{ padding:"2%"}} />
                        <button class="mini ui button">
                            Add
                        </button>
                    </div> */}
                        <Dropdown 
                            multiple
                            selection
                            fluid
                            options={options}
                            placeholder='Active filters'
                            renderLabel={renderLabel}
                        />
                    </Segment>
                    <Segment floated='right' style={{ maxWidth: "75%", }}>
                        {/* <Card.Group items={items} /> */}
                        <Grid columns='three' divided>
                            <Grid.Row>
                                <Grid.Column>
                                    <Header as="h3">
                                        <Header.Content>
                                            Job title
                                            <Header.Subheader>
                                                This where the descritption will go, I should probably type sstuff here
                                                Wow its hard to think of thinks to type on the spot I hope there arnt to many
                                                typos. But Then again what even is a typo. Is life a typo is an unplanned pregancy
                                                a Typo. I guess the point is there are typos in spelling but not in life.
                                            </Header.Subheader>
                                        </Header.Content>
                                    </Header>

                                </Grid.Column>
                                <Grid.Column>
                                    <Header as="h3">
                                        <Header.Content>
                                            Job title
                                            <Header.Subheader>
                                                This where the descritption will go, I should probably type sstuff here
                                                Wow its hard to think of thinks to type on the spot I hope there arnt to many
                                                typos. But Then again what even is a typo. Is life a typo is an unplanned pregancy
                                                a Typo. I guess the point is there are typos in spelling but not in life.
                                            </Header.Subheader>
                                        </Header.Content>
                                    </Header>

                                </Grid.Column>
                                <Grid.Column>
                                    <Header as="h3">
                                        <Header.Content>
                                            Job title
                                            <Header.Subheader>
                                                This where the descritption will go, I should probably type sstuff here
                                                Wow its hard to think of thinks to type on the spot I hope there arnt to many
                                                typos. But Then again what even is a typo. Is life a typo is an unplanned pregancy
                                                a Typo. I guess the point is there are typos in spelling but not in life.
                                            </Header.Subheader>
                                        </Header.Content>
                                    </Header>

                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row>
                                <Grid.Column>
                                    <Header as="h3">
                                        <Header.Content>
                                            Job title
                                            <Header.Subheader>
                                                This where the descritption will go, I should probably type sstuff here
                                                Wow its hard to think of thinks to type on the spot I hope there arnt to many
                                                typos. But Then again what even is a typo. Is life a typo is an unplanned pregancy
                                                a Typo. I guess the point is there are typos in spelling but not in life.
                                            </Header.Subheader>
                                        </Header.Content>
                                    </Header>

                                </Grid.Column>
                                <Grid.Column>
                                    <Header as="h3">
                                        <Header.Content>
                                            Job title
                                            <Header.Subheader>
                                                This where the descritption will go, I should probably type sstuff here
                                                Wow its hard to think of thinks to type on the spot I hope there arnt to many
                                                typos. But Then again what even is a typo. Is life a typo is an unplanned pregancy
                                                a Typo. I guess the point is there are typos in spelling but not in life.
                                            </Header.Subheader>
                                        </Header.Content>
                                    </Header>

                                </Grid.Column>
                                <Grid.Column>
                                    <Header as="h3">
                                        <Header.Content>
                                            Job title
                                            <Header.Subheader>
                                                This where the descritption will go, I should probably type sstuff here
                                                Wow its hard to think of thinks to type on the spot I hope there arnt to many
                                                typos. But Then again what even is a typo. Is life a typo is an unplanned pregancy
                                                a Typo. I guess the point is there are typos in spelling but not in life.
                                            </Header.Subheader>
                                        </Header.Content>
                                    </Header>

                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Form>

            </Container>
        </div>
    )
}
export default HomePage