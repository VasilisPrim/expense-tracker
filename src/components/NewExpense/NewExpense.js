import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [editState,setEditState] =  useState(false);

  const onNewExpenseHandler = (expense)=>{
    const expenseData = {
      ...expense,
      id:Math.random().toString()
    }
    props.onNewExpense(expenseData)
    setEditState(false);
  }
    

  const startEditing = ()=>{
    setEditState(true);
  }

  const cancelEditing = ()=>{
    setEditState(false);
  }




  return (
    <div className="new-expense">
      {!editState && <button onClick={startEditing}>Add new Expense</button>}
      {editState && <ExpenseForm onNewExpense = {onNewExpenseHandler} onCancel = {cancelEditing}/>}
    </div>
  );
};

export default NewExpense;
