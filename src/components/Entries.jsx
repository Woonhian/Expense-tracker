import React, { useContext } from "react";
import Entry from "./Entry";
import { ExpenseContext } from "../contexts/expenseContext";

const Entries = () => {
  const { entries } = useContext(ExpenseContext);
  return (
    <div className="mt-4">
      <h4 className="display-6">Entries</h4>
      <hr />

      <div className="list-group">
        {/* if entries is not defined, it is not going to do the entries.map */}
        {entries &&
          entries.map((el) => {
            return <Entry key={el.id} entry={el} />;
          })}
      </div>
    </div>
  );
};

export default Entries;
