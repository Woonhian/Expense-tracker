import React from "react";

const Summary = () => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card border-success">
          <div className="card-body">
            <h5 className="card-title text-center">Income</h5>
            <h4 className="text-center text-success display-5">+$100</h4>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card border-danger">
          <div className="card-body">
            <h5 className="card-title text-center">Expenses</h5>
            <h4 className="text-center text-danger display-5">-$100</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
