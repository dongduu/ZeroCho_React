import React, { useContext } from "react";
import { TableContext } from "./MineSearch";
import Tr from "./Tr";

const Table = () => {
  const { tableData } = useContext(TableContext);
  return (
    <table>
      <thead></thead>
      <tbody>
        <Tr />
      </tbody>
    </table>
  );
};

export default Table;
