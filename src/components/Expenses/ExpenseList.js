import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

export default function ExpenseList(props) {
  return (
    <ul className='expense-list'>
        {props.items.length===0 ? (
            <h2 className='expenses-list__fallback'>No Expense Found</h2>
        ):(
            props.items.map((item) => (<ExpenseItem key={item.id} expense={item} />))
        )}
    </ul>
  )
}
