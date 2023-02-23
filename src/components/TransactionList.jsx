import React from 'react'
import { GlobalContext } from '../context/globalState'

const TransactionList = () => {

    const NewContext = React.useContext(GlobalContext)
    console.log(NewContext)
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        <li className='minus'>
            Cash <span>-$500</span><button className='delete-btn'>x</button>
        </li>
      </ul>
    </>
  )
}

export default TransactionList
