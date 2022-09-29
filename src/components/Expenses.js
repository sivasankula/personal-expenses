import React, { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";

const Expenses = (props) => {
  const { expenses } = props;
  const [selectedYear, setSelectedYear] = useState("");
  const changeFilteredYear = (year) => {
    setSelectedYear(year);
  };
  let filteredExpenses = [];
  selectedYear ?  filteredExpenses = expenses.filter(item => item.date.getFullYear().toString() === selectedYear) : filteredExpenses = expenses;
  
  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selected={selectedYear}
          onSelectingYear={changeFilteredYear}
        />
      </div>
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
