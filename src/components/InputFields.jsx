import React from "react";
import {Header, Image, Form} from "semantic-ui-react"

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]
const InputFields = ({ onChangeHandler }) => {
  return (
    <>
    <Header as="h2" textAlign="center" color='grey'block>
    <Image src='https://services.garmin.com/appsLibraryBusinessServices_v0/rest/apps/2cf376ad-a240-41fb-bb2b-528f54270baa/icon/b4bfdf57-5fc9-405b-88f2-8e96c2b1f3c8'/>
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
  
    </>
  );
};

export default InputFields;