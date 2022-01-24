import React, { useState, useReducer, useCallback } from "react";
import Table from "./Table";

const initialState = {
  winner: "",
  turn: "o",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
};

const SET_WINNER = "SET_WINNER";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      // state.winner = action.winner <= 이렇게 하면 안됨
      return {
        ...state,
        winner: action.winner,
      };
  }
};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //   const [winner, setWinner] = useState("");
  //   const [turn, setTurn] = useState("O");
  //   const [tableData, setTableDate] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);

  const onClickEvent = useCallback(() => {
    dispatch({ type: "SET_WINNER", winner: "o" });
  }, []);

  return (
    <>
      <Table onClick={onClickEvent} tableData={state.tableData} />
      {state.winner && <div>{state.winner}님의 승리</div>}
    </>
  );
};

export default TicTacToe;
