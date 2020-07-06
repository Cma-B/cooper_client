import React from "react";
import {Header, Image, Form, Grid, Divider,Segment} from "semantic-ui-react"


const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

const InputFields = ({ onChangeHandler }) => {


  return (
    <>
 <Segment placeholder>
<Grid columns={2} relaxed='very'>
  <Grid.Column>
    <Header textAlign="center">
    <Image
  
  size='huge'
  src='https://www.donatiello.info/blog/fp-content/images/fitness_icon_500.png'
  style={{ marginTop: '1em' }}
/>
 </Header>
<Header as="h2" textAlign="center" color='grey' style={{ marginTop: '-0.2em' }}>

Track your fitness by the Cooper Test
</Header>

<Form style={{ marginLeft: '4em', marginTop: '4em' }}>
      <Form.Group widths='equal'> 
      <Form.Input fluid 
        label='Distance'
        placeholder='Enter distance in meter' 
        onChange={onChangeHandler} 
        name="distance" id="distance" 
      
        />
      <Form.Select
      onChange={onChangeHandler} 
      name="gender" 
      id="gender"
      fluid
      label='Gender'
       options={options}
       placeholder='Enter gender...'
        />
          
          <Form.Input fluid label='Age' placeholder='Enter age...' onChange={onChangeHandler} name="age" id="age"/>
          
    </Form.Group>
   
    </Form>
    
  </Grid.Column>
  <Divider vertical
  style={{fontSize:'1em',
  fontStyle:'italic', 
  fontFamily:'Bradley Hand, cursive' }}
  ></Divider>
  <Grid.Column>
  <Image src='https://miro.medium.com/max/1400/1*0qr6Ji5wDCl8YDnTCAxesw.jpeg' size='big'/>
  </Grid.Column>
 
    </Grid>
    </Segment>
  
   

    </>
  );
};

export default InputFields;
