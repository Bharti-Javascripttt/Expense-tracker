import React from 'react'
import '../App.css'
import ExpenseItem from './ExpenseItem'




function Expensesmain(props) {
  return (


    <div className='expensemain_'>
       {
        props.item.map(
          expense=>(
            <ExpenseItem 
            title={expense.title}
            date={expense.date}
            amount={expense.amount}/> )

          
        )
       }
 </div>
  )
}

export default Expensesmain
