import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

import { useState } from "react";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  function showForm() {
    setIsEditing(true);
  }
  function dontShowForm() {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {isEditing === false ? (
        <button onClick={showForm}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={dontShowForm}
        />
      )}
    </div>
  );
}

export default NewExpense;
