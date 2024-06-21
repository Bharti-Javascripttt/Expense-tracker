import React,{useState} from 'react'
import './App.css'
import Expensesmain from './Component/Expensesmain'
import Form from './Component/Form'

let DummyExp=[
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

const App = () => {
  const [expenses, setexpense]=  useState(DummyExp)
  
const addExpenseHandler=(expense)=>{
    // console.log(expense)
    const update_expense=[expense, ...expenses]
    setexpense(update_expense)
  }
  
  return ( <div className='main'>

         <h2>ADD EXPENSE</h2>
           <Form onAddExpense={addExpenseHandler}/>
           <Expensesmain item={expenses}/>

           
           
           </div>
  )
}

export default App
