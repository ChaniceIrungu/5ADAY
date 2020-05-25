import React from 'react';
import {Doughnut} from 'react-chartjs-2';





const Donut = ({data}) => {


  const state = {
  
    labels: data.map(e => (e?.label)),
    datasets: [
      {
        label: 'Nutrition',
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
        '#ffce56',
      //   '#35014F'
        ],
        data: data.map(e => (e?.quantity))
        
      }
    ]
  }
  
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
  
   

    export default Donut