import React from 'react'
import '../App.css'
// import ExpenseItem from './ExpenseItem';


const Date = (props) => {
    const z= props.date;
    const month=z.toLocaleString('en-US',{'month':'long'});
    const day=z.toLocaleString('en-US',{'day':'2-digit'});
    const year=z.getFullYear()
   
  return (
    
    <div className='date'> 
    <div className='expense_day'>{day}</div>
    <div className='expense_month'>{month}</div>
    <div className='expense_year'>{year}</div>  
    {/* <ExpenseItem></ExpenseItem>           */}
   </div>


  )
}

export default Date
