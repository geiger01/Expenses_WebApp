import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Expenses from "./Expenses";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₪{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
