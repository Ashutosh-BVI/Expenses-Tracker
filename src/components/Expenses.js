import React from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState(2020);

  // console.log(expenses.date.getFullYear());
  const filterExpenses = expenses.filter((year) => {
    console.log(year);
    return year.date.getFullYear() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={setFilteredYear}
          defaultYear={filteredYear}
        />
        {filterExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
