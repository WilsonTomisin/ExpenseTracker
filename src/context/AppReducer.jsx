import React from 'react'


const AppReducer = (state,action) => {
    if (action.type == 'delete') {
        return{
            ...state,
            transactions: state.transactions.filter((transaction)=>{
                return transaction.id !== action.payload
            })
        }
    }else if (action.type == 'add') {
        return{
            ...state,
            transactions: [...state.transactions, action.payload]
        }
    }else{
        return state
    }

  
}

export default AppReducer
