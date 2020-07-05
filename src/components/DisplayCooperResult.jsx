import React from "react";
import cooperCalculator from '../modules/cooperCalculator';
import { saveData } from '../modules/performanceData';
import { Button, Grid, Icon } from 'semantic-ui-react'

const DisplayCooperResult = ({ 
  distance,
  gender,
  age,
  authenticated,
  entrySaved,
  entryHandler
}) => {
  const result = cooperCalculator(distance, gender, age);

  const propsPassed = distance && age ? true : false;

  return (
    <>
      {propsPassed && (
        <>
        <Grid style={{ marginLeft: '3em', marginTop:'3em'}}>
          <Grid.Column width={7}>
          <p id="cooper-message"
          style={{fontSize:'1.5em',
          fontWeight:'bold',
          fontStyle:'normal', 
          fontFamily:'"Times New Roman", Times, serif' }}
          >
            <Icon disabled name='heartbeat'/>
            NOTE:
            {age} y/o {gender} running {distance} meters.
          </p>
          <p id="cooper-result"
          style={{fontSize:'1.5em',
          fontWeight:'bold',
          fontStyle:'normal', 
          fontFamily:'"Times New Roman", Times, serif' }}
          >
            <Icon disabled name='hand point right'/>
            RESULT: {result}</p>
          {authenticated && !entrySaved ? (
            <Button
            size="big"
            color="black"
            style={{ marginLeft: '0.5em' }}
            id="save-result"
            onClick={() => saveData (result, distance, entryHandler)}
            >
              Save Entry
            </Button>
          ) : (
            <p id="response-message"
            style={{fontSize:'1.5em',
          fontWeight:'bold',
          fontStyle:'normal', 
          fontFamily:'"Times New Roman", Times, serif' }}
            >
              <Icon disabled name='check'/>
              Your Entry Was Saved.</p>
          )}
          </Grid.Column>
          </Grid> 
        </>
      )}
    </>
  );

};

export default DisplayCooperResult;