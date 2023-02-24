import React from 'react'
import { GlobalContext } from '../context/globalState';



const Transactions = (props) => {
    const {deleteTransaction} = React.useContext(GlobalContext);

    const sign = props.transactions.amount > 0 ? '+' : '-';

    const handleClick = (e) =>{
        e.preventDefault();
        deleteTransaction(props.transactions.id)
    
    }
  return (
    <li className={props.transactions.amount > 0 ? 'plus': 'minus'} key={props.transactions.id} id={props.id}>
        {props.transactions.text} <span>{sign}${Math.abs(props.transactions.amount)}</span><button 
        onClick={handleClick} className='delete-btn'>x</button>
    </li>
  )
}

export default Transactions
