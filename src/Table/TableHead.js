import React from "react";

function TableHead({ data }) {
  return (
    <thead>
      <tr>
        {data.map((heading, i) => {
          return (
            <th
              className="text-grey text-left font-medium border border-lightslate px-3 pt-2 text-sm"
              key={i}
            >
              {heading}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
export default TableHead;
