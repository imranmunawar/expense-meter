import logo from './logo.svg';
import './App.css';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const DUMMY_EXP = [
  {id:'e1', title:'Car Insurance', amount: 94.14, date: new Date(2021,7,14)},
  {id:'e2', title:'New TV', amount: 90.14, date: new Date(2021,5,14)},
  {id:'e3', title:'Toilet Paper', amount: 80.14, date: new Date(2020,7,14)},
  {id:'e4', title:'Sugar', amount: 75.14, date: new Date(2020,6,14)},
  {id:'e5', title:'Spices', amount: 20.14, date: new Date(2022,4,14)}
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXP);

  const expenseDate = new Date(2023, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;

  const hanldAddExpense = (expense) => {
    console.log('in App');
    console.log(expense);
    setExpenses((prevExpenses) => { return [expense, ...prevExpenses]});
    console.log(expenses);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={hanldAddExpense} />
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
