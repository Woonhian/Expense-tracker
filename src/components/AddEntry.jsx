import React from "react";

const AddEntry = () => {
  return (
    <div className="border border-info rounded p-4 mt-4">
      <form className="form-group">
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" id="description" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" className="form-control" />
        </div>
        <button type="submit" className="btn btn-info">
          Add Entry
        </button>
      </form>
    </div>
  );
};

export default AddEntry;
