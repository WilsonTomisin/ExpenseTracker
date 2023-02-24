import React from 'react'
import { GlobalContext } from '../context/globalState'

const IncomeExpenses = () => {
  const NewContext = React.useContext(GlobalContext);

  const amounts = NewContext.transactions.map(transaction => transaction.amount)

  const Income = amounts.filter((amount)=>{
    return amount > 0 ;
  }).reduce((acc, currentVal)=>{
    return acc + currentVal
  },0).toFixed(2)

  const Expenses = amounts.filter((amount)=>{
    return amount < 0 ;
  }).reduce((acc, currentVal)=>{
    return acc + currentVal
  },0).toFixed(2)

  
  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>+${Income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className='money minus'>-${Math.abs(Expenses)}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses
