import React, { useContext } from "react";
import { TableContext } from "./MineSearch";
import Td from "./Td";

const Tr = () => {
  const { tableData } = useContext(TableContext);
  return (
    <tr>
      <Td />
    </tr>
  );
};

export default Tr;
