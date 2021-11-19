import { Button, Container, Divider, Form, Grid, Segment, Header, Icon, TextArea } from 'semantic-ui-react'
const CreateJob = () => {
    return (
        <div style={{ padding: "2%" }}>
            <Container>
                <Segment raised>
                    <Form>
                        <h1>Post a Job</h1>
                        <div style={{ maxWidth: "28%" }}>
                            <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                                <div class="ui grid">
                                    <div>
                                        {/* Job Title */}
                                        <Form.Input icon='user outline' iconPosition='left' label="What is the job title" placeholder='Title' />
                                        {/* Company Name */}
                                        <Form.Input icon='building outline' iconPosition='left' label="What is you firm's name" placeholder='Company Name' />
                                    </div>
                                    {/* Link */}
                                    <Form.Input icon='linkify' iconPosition='left' label="Link to the firm's website or job posting" placeholder='Company Link' />
                                    {/* Start Date */}
                                    <div style={{ paddingBottom: "10%" }}>
                                        <h3>Start Date</h3>
                                        <div class="ui calendar" id="example2">
                                            <div class="ui input left icon">
                                                <i class="calendar icon"></i>
                                                <input type="Date" placeholder="Date" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Type of Postion */}
                                <div>
                                    <h3>Type of Postion</h3>
                                    <div style={{ padding: "2%" }} class="ui toggle checkbox">
                                        <input type="checkbox" />
                                        <label>Full-Time</label>
                                    </div>
                                    <br />
                                    <div style={{ padding: 5 }} class="ui toggle checkbox">
                                        <input type="checkbox" />
                                        <label>Part-Time</label>
                                    </div>
                                    <br />
                                    <div style={{ padding: 5 }} class="ui toggle checkbox">
                                        <input type="checkbox" />
                                        <label>Contract Work</label>
                                    </div>
                                    <br />
                                    <div style={{ padding: 5 }} class="ui toggle checkbox">
                                        <input type="checkbox" />
                                        <label>Temp/Seasonal</label>
                                    </div>
                                </div>
                            </div>
                            {/* Company Descrtion */}
                            <div class="field" style={{ width: "350%", }}>
                                <h3>Company Description</h3>
                                <TextArea placeholder='Tell us more' />
                            </div>
                            {/* Job Descrtion */}
                            <div class="field" style={{ width: "350%", }}>
                                <h3>Job Description</h3>
                                <TextArea placeholder='Tell us more' />
                            </div>
                            {/* requirements */}
                            <div class="field" style={{ width: "350%", }}>
                                <h3>Requirements for Postion</h3>
                                <TextArea placeholder='Tell us more' />
                            </div>
                            {/* Benifits/Salary */}
                            <div class="field" style={{ width: "350%", }}>
                                <h3>Additonal Company Benefits:</h3>
                                <div class="ui input focus" style={{ paddingBottom: "2%" }}>
                                    <Form.Input icon='dollar sign' iconPosition='left' type='number' placeholder='Salary or Pay' />
                                </div>
                                <TextArea placeholder='Additional Benefits' />
                            </div>
                            <Button primary content='Post Job' icon='envelope' size='big' />
                        </div>
                    </Form>
                </Segment>
            </Container >
        </div>
    )
}
export default CreateJob