import React, { Component } from 'react';
import { getData } from '../modules/performanceData';
import {Line, Doughnut} from 'react-chartjs-2';
import {Header, Image, Form, Grid, Rail, Segment} from "semantic-ui-react"


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
          fill: true,
          borderColor:'rgba(75,192,192,1)',
          backgroundColor:'rgba(75,192,192,0.4)'
        }]
      }
      
      dataIndex = (
        
            <Line 
            data={data}
            width={500}
            height={300}
            options={{ maintainAspectRatio: false }}
          />
        

    
       
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
