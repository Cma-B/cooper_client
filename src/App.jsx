import React, { Component } from "react";
import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from "./components/InputFields";
import LoginForm from "./components/LoginForm";
import { authenticate } from './modules/auth';
import DisplayPerformanceData from "./components/DisplayPerformanceData"
import { Button, Grid, Icon, Message, Image, Divider, Segment } from 'semantic-ui-react'


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
           <Grid >
    
    <Grid.Column>
    <Button
              onClick={() => this.setState({ renderLoginForm: true })}
              size="large"
              color="black"
              style={{ marginLeft: '20em' }}
            >
              Login
            </Button>
    </Grid.Column>
    </Grid>
          </>
        );
        break;
          
      case authenticated:
        renderLogin = (
       
          <>
          <Grid >
          <Grid.Column width={7} style={{ marginLeft: '4em', marginTop:'1em'}} >
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
              <DisplayPerformanceData
                updateIndex={this.state.updateIndex}
                indexUpdated={() => this.setState({ updateIndex: false })}
              />
        <Grid columns={6}>
        <Grid.Column>
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
