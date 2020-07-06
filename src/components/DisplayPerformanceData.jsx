import React, { Component } from 'react';
import { getData } from '../modules/performanceData';
import {Line, Doughnut} from 'react-chartjs-2';
import {Grid,} from "semantic-ui-react"


class DisplayPerformanceData extends Component {
  state = {
    performanceData: null
  }
  componentDidMount() {
    this.getPerformanceData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.updateIndex != prevProps.updateIndex) {
      this.getPerformanceData()
    }
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({ performanceData: result.data.entries }, () => {
      this.props.indexUpdated();
    })

  }


  render() {
    let dataIndex;

    if (this.state.performanceData != null) {
    
      const distances = []
      const labels = []
    this.state.performanceData.forEach (entry => {
      distances.push(entry.data.distance)
      labels.push(entry.data.message)
    })
      const data = {
        labels: labels,
        datasets: [{
          data: distances,
          label: "saved distance",
          fill: false,
          lineTension: 0.3,
          backgroundColor: '#000066',
          borderColor: '#000066',
          borderCapStyle: 'butt',
          borderDash: [],
          pointBorderColor: '#000000',
          pointBackgroundColor: '#000000',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#ccccff',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
        }]
      }
      
      dataIndex = (
        <Grid columns={2} relaxed='very'>
          
          <Grid.Column style={{ marginLeft: '2em'}}>
           
            <Line 
            data={data}
            width={100}
            height={300}
            options={{ maintainAspectRatio: false }}
          />
      </Grid.Column>
       </Grid>
      )
    }

    return (

      <div>
        {dataIndex}
      </div>
    )
  }      


}

export default DisplayPerformanceData
