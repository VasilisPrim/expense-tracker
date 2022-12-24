import { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props)=> {
  const [year,setYear] =  useState("2020");

  const dataFromFilterHandler = (year)=>{
    
    setYear(year);
  }
  const filteredExpenses = props.item.filter(expense=>expense.date.getFullYear().toString() === year);

  

  
 
  return (
    <div>
    
    <Card className="expenses">
    <ExpensesFilter selected = {year} onDataFromFilter={dataFromFilterHandler}/>   
    <ExpensesChart expenses = {filteredExpenses}/>
      <ExpensesList items = {filteredExpenses}/>
    </Card>
    </div>
  );
}

export default Expenses;
