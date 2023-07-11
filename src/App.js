import logo from './logo.svg';
import './App.css';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const expense = [
    {id:'e1', title:'Car Insurance', amount: 94.14, date: new Date(2020,7,14)},
    {id:'e2', title:'New TV', amount: 90.14, date: new Date(2020,7,14)},
    {id:'e3', title:'Toilet Paper', amount: 80.14, date: new Date(2020,7,14)},
    {id:'e4', title:'Sugar', amount: 75.14, date: new Date(2020,7,14)},
    {id:'e5', title:'Spices', amount: 20.14, date: new Date(2020,7,14)}
  ];

  const expenseDate = new Date(2023, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;

  const hanldAddExpense = (expense) => {
    console.log('in App');
    console.log(expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={hanldAddExpense} />
      <Expense expense={expense} />
    </div>
  );
}

export default App;
