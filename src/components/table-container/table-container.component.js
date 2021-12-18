import React from "react";

const TableContainer = ({ children, headings }) => {
  return (
    <table className="table">
      {headings.length > 0 && (
        <thead>
          <tr>
            {headings.map(heading => (
              <th scope="col" key={heading}>
                {heading}
              </th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
      )}
      {children}
    </table>
  );
};

export default TableContainer;
