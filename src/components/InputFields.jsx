import React from "react";
import {Header, Image, Form, Grid, Segment, Divider, Icon} from "semantic-ui-react"

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]


const InputFields = ({ onChangeHandler }) => {

  return (
    <>

<Grid columns={2} relaxed='very'>
  <Grid.Column >
    <Header textAlign="center" >
    <Image
  
  size='huge'
  src='https://www.donatiello.info/blog/fp-content/images/fitness_icon_500.png'
  style={{ marginTop: '1em' }}
/>
 </Header>
<Header as="h2" textAlign="center" color='grey' style={{ marginTop: '-0.2em' }}>

Track your fitness by the Cooper Test
</Header>

<Form style={{ marginLeft: '2em', marginTop: '4em' }}>
      <Form.Group widths='equal'> 
      <Form.Input fluid 
        label='Distance'
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
    
    <Divider vertical
     style={{fontSize:'1em',
     fontStyle:'italic', 
     fontFamily:'Bradley Hand, cursive' }}
     >THE COOPER TEST</Divider>
   
    </>
  );
};

export default InputFields;
