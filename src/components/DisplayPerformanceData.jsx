import React, { Component } from 'react';
import { getData } from '../modules/performanceData';
import {Line} from 'react-chartjs-2';

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
          lineTension: 0.2,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10, 

        }]
      }

      dataIndex = (
        <div >
          <Line data={data}
         
          />
        </div>
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