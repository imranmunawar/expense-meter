import React from 'react'
import './NewExpense.css'
import FormExpense from './FormExpense'

export default function NewExpense(props) {
    
    const handleExpenseData = (eneterdExpenseData) => {
        const expenseData = {
            ...eneterdExpenseData,
            id: Math.random.toString()
        };
        props.onAddExpense(expenseData);
        console.log(expenseData);
    };

    return (
            <div className='new-expense'>
                <FormExpense onSaveExpenseData={handleExpenseData} />
            </div> 
    )
}
