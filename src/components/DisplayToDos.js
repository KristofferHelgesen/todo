import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { SingleTodo } from "./SingleTodo";

const Error = styled.div`
  padding: 50px;
  background-color: #ffe7d9;
`;

const DisplayToDos = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.error);
  const savedValues = useSelector(state => state.savedValues);
  const remove = val => dispatch({ type: "REMOVE", value: val });

  function easyDispatch(type, value) {
    //props ===
    dispatch({ type: type, value: value });
  }

  function idkDispatch(obj) {
    //props ===
    dispatch(obj);
  }

  const Update = (changedFrom, changedTo) =>
    dispatch({ type: "EDIT", value: changedTo, changedFrom: changedFrom });

  const showTodo = savedValues
    ? savedValues.map(x => {
        const key = Math.random();

        return (
          <SingleTodo
            remove={remove}
            key={key}
            x={x}
            changeHandler={Update}
            oldValue={x}
          />
        );
      })
    : null;

  const showError = error !== "" ? <Error>{error}</Error> : null;

  return (
    <>
      {showError}
      <div>{showTodo}</div>
    </>
  );
};

export default DisplayToDos;
