import React, { useState } from 'react'
import './FormExpense.css'

export default function FormExpense(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    /*const [userInput, setUserInput] = useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''

    });*/

    const hanldeTitle = (e) => {
        setEnteredTitle(e.target.value);
        
        // setUserInput({
        //    ...userInput,
        //    enteredTitle: e.target.value,
        //});
        
        //setUserInput((prevState) =>{
        //    return { ...prevState, enteredTitle: e.target.value}
        //});
    }
    const hanldeAmount = (e) => {
        setEnteredAmount(e.target.value);
        /*setUserInput({
            ...userInput,
            enteredAmount: e.target.value,
        });*/
    }
    const hanldeDate = (e) => {
        enteredDate(e.target.value);
        /*setUserInput({
            ...userInput,
            enteredDate: e.target.value,
        });*/
    }

    const handleInput = (identifier, value) => {
        if(identifier === 'title'){
            setEnteredTitle(value);
        }else if(identifier === 'amount'){
            setEnteredAmount(value);
        }else if(identifier === 'date'){
            setEnteredDate(value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate
        }

        props.onSaveExpenseData(expenseData);
        
        console.log(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={(event)=>handleInput('title', event.target.value)} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01"  value={enteredAmount} onChange={(event)=>handleInput('amount', event.target.value)}  />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2023-12-31"  value={enteredDate} onChange={(event)=>handleInput('date', event.target.value)}  />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
