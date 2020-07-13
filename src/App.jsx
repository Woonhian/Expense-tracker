import React from "react";
import TotalBalance from "./components/TotalBalance";
import Summary from "./components/Summary";
import AddEntry from "./components/AddEntry";
import Entries from "./components/Entries";
import "./App.css";
import { ExpenseContextProvider } from "./contexts/expenseContext";

const App = () => {
  return (
    <ExpenseContextProvider>
      <div className="container justify-content-center">
        <TotalBalance />
        <Summary />
        <AddEntry />
        <Entries />
      </div>
    </ExpenseContextProvider>
  );
};

export default App;
