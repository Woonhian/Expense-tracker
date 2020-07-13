import React from "react";

const Entry = () => {
  return (
    <div>
      <li className="entry-item mt-2 list-group-item list-group-item-action list-group-item-success">
        Pizza purchase
        <button className="close-button close">
          <span aria-hidden="true">&times;</span>
        </button>
        <span className="float-right">+$250</span>
      </li>
    </div>
  );
};

export default Entry;
