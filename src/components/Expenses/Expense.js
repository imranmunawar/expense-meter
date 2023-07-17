import React, { useState } from 'react'
import './Expense.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'
import ExpenseChart from './ExpenseChart'

export default function Expense(props) {

  const [filteredYear, setFilteredYear] = useState('2023');

  const handleChangeFIlter = (selectedYear) =>{
      setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={handleChangeFIlter} />
      <ExpenseChart expenses = {filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  )
}
