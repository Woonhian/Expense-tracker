import React, { createContext, useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseContextProvider = (props) => {
  const [entries, setEntries] = useState([
    { id: 1, description: "pizza", amount: -20 },
    { id: 2, description: "Salary", amount: 100 },
    { id: 3, description: "Grab", amount: -15 },
    { id: 4, description: "Mcdonalds", amount: 6 },
    { id: 5, description: "Drinks", amount: 50 },
  ]);

  const handleDelete = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const addEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  };

  return (
    <ExpenseContext.Provider value={{ entries, handleDelete, addEntry }}>
      {props.children}
    </ExpenseContext.Provider>
  );
};
