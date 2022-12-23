import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {

  const onNewExpenseHandler = (expense)=>{
    const expenseData = {
      ...expense,
      id:Math.random().toString()
    }
    props.onNewExpense(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onNewExpense = {onNewExpenseHandler} />
    </div>
  );
};

export default NewExpense;
