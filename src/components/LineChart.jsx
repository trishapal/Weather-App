import React from 'react'
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement,Legend, CategoryScale,LinearScale,PointElement} from 'chart.js';
import { useState } from 'react';
import { useEffect } from 'react';

ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale,LinearScale,PointElement
)
function LineChart({items}) {
 
  
  
  const labels=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"]
  const dataLow=[23,25,21,23,29,22,31]
  const dataHigh=[32,35,33,30,38,31,40]
 
  const [data,setData]= useState({
    labels,
    datasets:[
      {
        label:"Lowest Temperature",
        data: dataLow,
        backgroundColor: 'blue',
        borderColor:"#00FFFF",
        responsive:true,
        tension:0.4, 
        pointStyle:"rect",
        pointBorderColor:"black"
      },
      {
        label:"Highest Temperature",
        data: dataHigh,
        backgroundColor: 'red',
        borderColor:"yellow",
        responsive:true,
        tension:0.4,
        pointStyle:"rect",
        pointBorderColor:"black"
      }
    ]});
    useEffect(()=>{
      const chartLabel=[]
      const dataSet1=[]
      const dataSet2=[]
      for(const val of items){

      chartLabel.push(val.title);
      dataSet1.push(val.min_temp.toFixed());
      dataSet2.push(val.max_temp.toFixed());
      } 
      setData({
        labels:chartLabel,
        datasets:[
          {
            label:"Lowest Temperature",
            data: dataSet1,
            backgroundColor: 'blue',
            borderColor:"#00FFFF",
            tension:0.4, 
            pointStyle:"rect",
            pointBorderColor:"black"
          },
          {
            label:"Highest Temperature",
            data: dataSet2,
            backgroundColor: 'red',
            borderColor:"yellow",
            tension:0.4,
            pointStyle:"rect",
            pointBorderColor:"black"
          }
        ]})
      
    },[])
    useEffect(()=>{
      const chartLabel=[]
      const dataSet1=[]
      const dataSet2=[]
      for(const val of items){

      chartLabel.push(val.title);
      dataSet1.push(val.min_temp.toFixed());
      dataSet2.push(val.max_temp.toFixed());
      } 
      setData({
        labels:chartLabel,
        datasets:[
          {
            label:"Lowest Temperature",
            data: dataSet1,
            backgroundColor: 'blue',
            borderColor:"#00FFFF",
            tension:0.4, 
            pointStyle:"rect",
            pointBorderColor:"black"
          },
          {
            label:"Highest Temperature",
            data: dataSet2,
            backgroundColor: 'red',
            borderColor:"yellow",
            tension:0.4,
            pointStyle:"rect",
            pointBorderColor:"black"
          }
        ]})
      
    },items)

  return (
   
    
    <div className='bg-white'>
      <div className=' flex items-center justify-start mt-6'>
        <p className='text-slate-500 font-medium uppercase'>daily forecast</p>
      </div>
      <hr className='my-2'/>
     <Line data={data}>LineChart</Line>
     </div>
  )
}

export default LineChart