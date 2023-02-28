import React from 'react'
import { GlobalContext } from '../context/globalState'
import Transactions from './Transactions'

const TransactionList = () => {

    const NewContext = React.useContext(GlobalContext)
    
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {NewContext.transactions.map((transactions,index)=> <Transactions id={index} transactions={transactions}/>)}
      </ul>
    </>
  )
}

export default TransactionList
