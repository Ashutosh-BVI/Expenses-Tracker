import React from "react";

function ExpenseDate({ date }) {
  // console.log(date);

  const month = new Date(date).toLocaleString("en-US", { month: "long" });
  const day = new Date(date).toLocaleString("en-US", { day: "2-digit" });
  const year = new Date(date).getFullYear();
  // console.log("YEAR:-", year);

  return (
    <div className="expense-date ">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
