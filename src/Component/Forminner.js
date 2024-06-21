import React from 'react'
import '../App.css'

const Forminner = () => {
  return (
    <div>

         <form>
            <div className='form_container'> 
            <div className='form1'>
                <label>Title</label>
                <input type="text"></input>
            </div>

            <div className='form1'>
                <label>Amount</label>
                <input type="number" min="0.1" step="0.1"></input>
            </div>

            <div className='form1'>
                <label>Date</label>
                <input type="date"></input>
            </div>

            <div className='button_ form1'>
                <button type='submit'> 
                    Add Expense
                </button>
            </div>
            
            
            
            </div>
        </form>
      
    </div>
  )
}

export default Forminner
