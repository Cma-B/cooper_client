import React, { Component } from "react";
import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from "./components/InputFields";
import LoginForm from "./components/LoginForm";
import { authenticate } from './modules/auth';
import DisplayPerformanceData from "./components/DisplayPerformanceData"
import { Button, Grid, Form, Icon, Message, Segment, Divider } from 'semantic-ui-react'


class App extends Component {
  state = {
    distance: "",
    gender: "female",
    age: "",
    renderLoginForm: false,
    authenticated: false,
    message: "",
    entrySaved: false,
    renderIndex: false
  };



  onLogin = async e => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value, entrySaved: false });
  };
 
  render() {
    const { renderLoginForm, authenticated, message } = this.state;
    let performanceDataIndex;
    let renderLogin;
    switch(true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />;
        break;
      case !renderLoginForm && !authenticated:
        renderLogin = (
          <>
           <Grid columns={6}>
    <Grid.Column></Grid.Column>
    <Grid.Column>
    <Button
              onClick={() => this.setState({ renderLoginForm: true })}
              size="large"
              color="black"
              style={{ marginLeft: '5em' }}
            >
              Login
            </Button>
    </Grid.Column>
    </Grid>

            <p id="message">{message}</p>
    
          </>
        );
        break;
          
      case authenticated:
        renderLogin = (
       
          <>
 
          <Grid style={{ marginLeft: '3em', marginTop:'3em'}}>
            <Grid.Column width={7}>
          <Message attached='header' color="black" floating
          id="message"  
          style={{fontSize:'1em',
          fontWeight:'bold',
          fontStyle:'normal', 
          fontFamily:'"Times New Roman", Times, serif' }}
          >
         <Icon name='user' size='large'/>
       
         Hi {JSON.parse(sessionStorage.getItem("credentials")).uid} 
          
          </Message> 
          </Grid.Column>
          </Grid> 
             
         </>    
        );

        if (this.state.renderIndex) {
          performanceDataIndex = (
            <>
    
          <Grid columns={6}>
        
          <Grid.Column>
    
              <DisplayPerformanceData
                updateIndex={this.state.updateIndex}
                indexUpdated={() => this.setState({ updateIndex: false })}
              />

              <Button
                 size="large"
                 color="black"
                 style={{ marginLeft: '3.5em' }}
               onClick={() => this.setState({ renderIndex: false })}>Hide Past Entries</Button>
    </Grid.Column>
    </Grid>
   
            </>
          )
        } 
        else {
        performanceDataIndex = (
       
          <Grid columns={6}>
          
          <Grid.Column>

          <Button
          size="large"
          color="black"
          style={{ marginLeft: '3.5em' }}
          id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show Past Entries</Button>
          </Grid.Column>
          </Grid>

        )
       
      } 
    
    }
  

    return (
      <>
        <InputFields onChangeHandler={this.onChangeHandler} />
        {renderLogin}
        <DisplayCooperResult
        distance={this.state.distance}
        gender={this.state.gender}
        age={this.state.age}
        authenticated={this.state.authenticated}
        entrySaved={this.state.entrySaved}
        entryHandler={() => this.setState({ entrySaved: true, updateIndex: true })}
/>
{performanceDataIndex}
      </>
    );
  }
}
export default App;
