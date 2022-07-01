import React from "react";
import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import './ExpenseFilter.css'

function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.27;
  // const [title,setTittle] = useState(props.title)
  // const clickHandler = () => {
  //   setTittle('Title Changed')
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button className="expense-item__price" onClick={clickHandler}>change title</button> */}
    </Card>
  );
}

export default ExpenseItem;
