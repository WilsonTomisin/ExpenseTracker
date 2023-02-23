import React from 'react'
import { scryRenderedDOMComponentsWithTag } from 'react-dom/test-utils'

const AddTransaction = () => {
    const [text, setText] = React.useState('')
    const [amount, setAmount] = React.useState(0)

    const HandleAmount = (e)=>{
        e.preventDefault();
        setAmount(e.target.value)
    }
  return (
    <>
        <h3>Add New Transaction</h3>
        <form >
            <div className='form-control'>
                <label htmlFor="text">Text</label>
                <input 
                type="text" 
                name='text' 
                placeholder='Enter text...'
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
            <button className='btn'>Add Transaction</button>
        </form> 
    </>
  )
}

export default AddTransaction
