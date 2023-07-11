import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expense.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter'

export default function Expense(props) {

  const [filteredYear, setFilteredYear] = useState('2023');

  const handleChangeFIlter = (selectedYear) =>{
      setFilteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={handleChangeFIlter} />
      <ExpenseItem expense={props.expense[0]} />
      <ExpenseItem expense={props.expense[1]} />
      <ExpenseItem expense={props.expense[2]} />
      <ExpenseItem expense={props.expense[3]} />
      <ExpenseItem expense={props.expense[4]} />
    </Card>
  )
}
