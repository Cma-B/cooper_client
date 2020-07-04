import React from "react";
import {Header, Image, Form, Grid, Segment } from "semantic-ui-react"

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

const InputFields = ({ onChangeHandler }) => {

  return (
    <>
<Segment horizental>
<Grid columns={2} relaxed='very'>
  <Grid.Column>
    <Header textAlign="center" >
    <Image
  size='huge'
  src='https://www.donatiello.info/blog/fp-content/images/fitness_icon_500.png'
/>
 </Header>
<Header as="h2" textAlign="center" color='grey'>

Track your fitness by the Cooper Test
</Header>
<Form>
      <Form.Group widths='equal'> 
      <Form.Input fluid label='Distance'
        placeholder='Enter distance in meter' 
        onChange={onChangeHandler} 
        name="distance" id="distance" 
        />
      <Form.Select
            fluid
            label='Gender'
            options={options}
            placeholder='Enter gender...'
          />
          <Form.Input fluid label='Age' placeholder='Enter age...' onChange={onChangeHandler} name="age" id="age"/>
    
    </Form.Group>
    </Form>

  </Grid.Column>
  <Grid.Column>
  
  </Grid.Column>

    </Grid>
    
    </Segment>
    </>
  );
};

export default InputFields;
