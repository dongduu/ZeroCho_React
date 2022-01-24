import React from "react";
import Tr from "./Tr";

const Table = ({ onClick, tableData }) => {
  return (
    <tabel onClick={onClick}>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr rowData={tableData[i]} />
        ))}
    </tabel>
  );
};

export default Table;
