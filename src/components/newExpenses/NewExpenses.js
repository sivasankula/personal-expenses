import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
    const onAddExpenseRecieveNewEx = (expenseData) => {
        console.log(expenseData);
        props.onExpenseRecieved(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveAddExpense={onAddExpenseRecieveNewEx} />
        </div>
    )
}

export default NewExpenses;