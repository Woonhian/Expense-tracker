import React from "react";
import TotalBalance from "./components/TotalBalance";
import Summary from "./components/Summary";
import AddEntry from "./components/AddEntry";
import Entries from "./components/Entries";
import "./App.css";

const App = () => {
  return (
    <div className="container justify-content-center">
      <TotalBalance />
      <Summary />
      <AddEntry />
      <Entries />
    </div>
  );
};

export default App;
