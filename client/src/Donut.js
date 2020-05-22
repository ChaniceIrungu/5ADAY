import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const state = {
  labels:["Calories", "Protein", "Carbs", "Fat"],
  datasets: [
    {
      label: 'nutrition',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
    //   '#35014F'
      ],
      data: [80, 81, 56, 81]
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <div>
       

        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Nutrition',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    )
        }
    }