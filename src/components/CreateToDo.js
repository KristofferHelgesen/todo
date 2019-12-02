import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NameTitle = styled.h1`
  color: #698f86;
  text-align: center;
`;
const AddButton = styled.div`
  margin-left: 10px;
  background-color: #698f86;
  width: 35px;
  height: 35px;
  border-radius: 100%;
`;
const InputField = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const CreateToDo = () => {
  const todo = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const onAdd = val => dispatch({ type: "ADD", value: val });
  const onSave = () => dispatch({ type: "SAVE" });

  return (
    <>
      <NameTitle>To Do</NameTitle>
      <Container>
        <span>
          <InputField
            value={todo}
            onChange={e => onAdd(e.target.value)}
            onKeyDown={e => (e.key === "Enter" ? onSave() : null)}
            type="text"
          ></InputField>
        </span>

        <AddButton href="#" onClick={() => onSave()}>
          <svg viewBox="0 0 24 24">
            <path
              fill="#FFFFFF"
              d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"
            />
          </svg>
        </AddButton>
      </Container>
    </>
  );
};

export default CreateToDo;
