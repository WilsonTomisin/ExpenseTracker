import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalState'

const AddTransaction = () => {
    const [text, setText] = React.useState('')
    const [amount, setAmount] = React.useState()

    const { addTransaction } = useContext(GlobalContext)

    function handleSubmit (event) {
        event.preventDefault();
        const newTransactions ={
            id: Math.floor(Math.random() * 1000),
            text,
            amount : Number(amount)
        }
        addTransaction(newTransactions)
        setText('')
        setAmount(0)

    }
    const HandleAmount = (e)=>{
        e.preventDefault();
        setAmount(e.target.value)
    }
  return (
    <>
        <h3>Add New Transaction</h3>
        <form onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor="text">Text</label>
                <input 
                type="text" 
                name='text' 
                placeholder='Enter text'
                value={text}
                onChange={(e)=>{
                    e.preventDefault();
                    setText(e.target.value)
                }} />
            </div>
            <div className='form-control'>
                <label htmlFor="amount">Amount</label>
                <input type="number" name='amount'value={amount} onChange={HandleAmount} placeholder='Enter amount...' />
                
            </div>
            <span className='prompt'>NB:if an expense enter amount with a negative number otherwise leave it as a positive number</span>
            <button className='btn'>Add Transaction</button>
        </form> 
    </>
  )
}

export default AddTransaction
