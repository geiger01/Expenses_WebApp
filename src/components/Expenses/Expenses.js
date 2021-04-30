import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2021");

  const YearChangeHandler = (year) => {
    setSelectedYear(year);
    console.log(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onYearChange={YearChangeHandler}
        />

        {filteredExpenses.length === 0 ? ( //If there no items in the list, It renders "No Expenses Found"
          <p>No Expenses Found.</p>
        ) : (
          filteredExpenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.key}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })
        )}
      </Card>
    </div>
  );
}

export default Expenses;
