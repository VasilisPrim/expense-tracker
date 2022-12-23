import { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props)=> {
  const [year,setYear] =  useState("2020");

  const dataFromFilterHandler = (year)=>{
    
    setYear(year);
  }
 
  return (
    <div>
    
    <Card className="expenses">
    <ExpensesFilter selected = {year} onDataFromFilter={dataFromFilterHandler}/>   
    {props.item.map(expense=>{
      return ( 
      <ExpenseItem key = {expense.id} title={expense.title}
        amount={expense.amount}
        date={expense.date}/>)})}
      
    </Card>
    </div>
  );
}

export default Expenses;
