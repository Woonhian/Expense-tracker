import React from "react";
import Entry from "./Entry";

const Entries = () => {
  return (
    <div className="mt-4">
      <h4 className="display-6">Entries</h4>
      <hr />

      <div className="list-group">
        <Entry />
        <Entry />
        <Entry />
        <Entry />
      </div>
    </div>
  );
};

export default Entries;
