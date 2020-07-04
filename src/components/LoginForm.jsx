import React from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'

const LoginForm = ({ submitFormHandler }) => {
    return (

        <Form onSubmit ={submitFormHandler} id="login-form">
        <Form.Field>
          <label>Email</label>
          <input name="email" type="email" id="email" placeholder='Email' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input name="password" type="password" id="password" placeholder='Password' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit' id="submit">Submit</Button>
      </Form>

    );
};

export default LoginForm;