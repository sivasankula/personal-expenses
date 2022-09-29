import './App.css';

import Expenses from './components/Expenses';
import NewExpenses from './components/newExpenses/NewExpenses';

function App() {
  const expenses = [
    {title:'Car Buy',amount:3453,date: new Date(2022,4,6),id:'e1'},
    {title:'Tv In Kitchen',amount:3444,date: new Date(2021,1,12),id:'e2'},
    {title:'Trip',amount:9865,date: new Date(2022,5,19),id:'e3'},
    {title:'Mobile',amount:1234,date: new Date(2020,6,4),id:'e4'},
  ]
  const addExpenseHandler = (expenseDate) =>{
    console.log('in app', expenseDate);
  }
  return (
    <div>
      <NewExpenses onExpenseRecieved = {addExpenseHandler} />
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
