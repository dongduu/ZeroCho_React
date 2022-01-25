import React from "react";
import Tr from "./Tr";

const Table = ({ tableData, dispatch }) => {
  return (
    <tabel>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr dispatch={dispatch} rowIndex={i} rowData={tableData[i]} />
        ))}
    </tabel>
  );
};

export default Table;
