import React from 'react'
import { GlobalContext } from '../context/globalState'

const Balance = () => {

  const NewContext = React.useContext(GlobalContext)

  // Get the amounts an throw them in an array
  const amount = NewContext.transactions.map(transaction => transaction.amount)


  const Total = amount.reduce((acc,currentVal)=>{
      return acc + currentVal;
  },0).toFixed(2)

  const hasGoodBalance = Total > 0 ? 'green': 'red'
  
  return (
    <>
      <div className="balance">
      <h4>Your Balance</h4>
      <h1 className= {hasGoodBalance}>${Total}</h1>
      </div>
    </>
  )
}

export default Balance
