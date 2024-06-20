import React from 'react'
import './App.css'
// import ExpenseItem from './Component/ExpenseItem'
import Expensesmain from './Component/Expensesmain'

const App = () => {

  let expense=[
    {
      id:1,
      title:'School Fee',
      amount:250,
      date:new Date(2021, 5,12)
    },
    {
      id:1,
      title:'Books',
      amount:250,
      date:new Date(2021, 5,12)
    },
    {
      id:2,
      title:'Food',
      amount:450,
      date:new Date(2021, 5,12)
    },
    {
      id:1,
      title:'House Rent',
      amount:2250,
      date:new Date(2023, 5,12)
    },
    {
      id:1,
      title:'Grocery',
      amount:2550,
      date:new Date(2022, 5,12)
    }
  ]
  
  return ( <div className='main'>
           <Expensesmain item={expense}/>
           
           
           </div>
  )
}

export default App
