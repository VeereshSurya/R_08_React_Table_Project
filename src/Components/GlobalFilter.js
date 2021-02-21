import React from "react";

// Adding filtering feature using this component using hooks
const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <span>
        Search {"  "}
        <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      </span>
    </div>
  );
};

export default GlobalFilter;
