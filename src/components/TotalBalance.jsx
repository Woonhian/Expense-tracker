import React, { useContext } from "react";
import { ExpenseContext } from "../contexts/expenseContext";

const TotalBalance = () => {
  // Retrive state
  const { entries } = useContext(ExpenseContext);
  let sum = 0;
  entries.forEach((el) => {
    sum += parseInt(el.amount);
  });

  return (
    <div>
      <h2 className="display-3 text-center">${sum}</h2>
    </div>
  );
};

export default TotalBalance;
