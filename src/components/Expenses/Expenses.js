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
      <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      ></ExpenseItem>
    </Card>
    </div>
  );
}

export default Expenses;
