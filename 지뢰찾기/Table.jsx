import React, { useContext } from "react";
import { TableContext } from "./MineSearch";
import Tr from "./Tr";

const Table = () => {
  const { tableData } = useContext(TableContext);
  return (
    <table>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr />
        ))}
    </table>
  );
};

export default Table;
