import React, { useReducer, createContext, useMemo } from "react";
import Form from "./Form";
import Table from "./Table";

export const CODE = {
  MINE: -7,
  NOMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICK_MINE: -6,
  OPENED: 0,
};

export const TableContext = createContext({
  tableData: [],
  dispatch: () => {},
});

const initialState = {
  tableData: [],
  timer: 0,
  result: "",
};

export const START_GAME = "START_GAME";

const reducer = (state, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        tableData: plantMine(action.row, action.cell, action.mine),
      };
    default:
      return state;
  }
};

const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(
    () => ({ tableData: state.tableData, dispatch }),
    [state.tableData]
  );

  return (
    <TableContext.Provider value={value}>
      <Form />
      <div>{state.timer}</div>
      <Table />
      <div>{state.result}</div>
    </TableContext.Provider>
  );
};

export default MineSearch;
