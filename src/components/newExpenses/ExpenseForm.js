import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const inputHandler = (e) => {
        setTitle(e.target.value);
    }
    const amountHadler = (e) => {
        setAmount(e.target.value);
    }
    const dateHandler = (e) => {
        setDate(e.target.value);
    }
    const addExpense = (e) => {
        e.preventDefault();
        props.onSaveAddExpense({title:title,amount:amount,date:date,id:Math.random().toLocaleString()});
        // console.log({title:title,amount:amount,date:date});
        setAmount("");
        setTitle("");
        setDate("");
    }
    return(
        <form onSubmit={addExpense}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={inputHandler} value={title} name="title"/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0" step='any' onChange={amountHadler} value={amount} name="amount" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2022-01-01" value={date.toLocaleString()} onChange={dateHandler}  />
                </div>
            </div>
            <div className="new-expense__action">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )   
}

export default ExpenseForm;