import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const [addState, setAddState] = useState(false);
  const onAddExpenseRecieveNewEx = (expenseData) => {
    console.log(expenseData);
    props.onExpenseRecieved(expenseData);
  };
  const addExpensesHandler = () => {
    setAddState(true);
  };

  const closeAddNewExpensesHandler = () => {
    setAddState(false);
  }
  return (
    <div className="new-expense">
      {!addState ? (
        <div>
          <button onClick={addExpensesHandler}>Add New Expenses</button>
        </div>
      ) : (
        <ExpenseForm onSaveAddExpense={onAddExpenseRecieveNewEx} onCloseAddNewExpenses = {closeAddNewExpensesHandler} />
      )}
    </div>
  );
};

export default NewExpenses;