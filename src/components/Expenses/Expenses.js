import { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props)=> {
  const [year,setYear] =  useState("2020");

  const dataFromFilterHandler = (year)=>{
    
    setYear(year);
  }
  const filteredExpenses = props.item.filter(expense=>expense.date.getFullYear().toString() === year);

  

  
 
  return (
    <li>
    
    <Card className="expenses">
    <ExpensesFilter selected = {year} onDataFromFilter={dataFromFilterHandler}/>   
    
      <ExpensesList items = {filteredExpenses}/>
    </Card>
    </li>
  );
}

export default Expenses;
