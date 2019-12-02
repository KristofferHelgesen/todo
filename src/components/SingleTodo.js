import React from "react";
import styled, { keyframes } from "styled-components";
import Edit from "./Edit";
import { Markup } from "interweave";
const backgroundColorDelete = keyframes`

from { color: "#c6d2cf";}
  to { color: yellow;}
`;
const backgroundColorDeletes = keyframes`

from { color: yellow;}
  to { color: "#c6d2cf";}
`;

const DeleteThis = styled.span`
  &:hover {
    animation: ${backgroundColorDelete} 0.3s linear forwards;
  }

  animation: ${backgroundColorDeletes} 0.3s linear forwards;
  color: #c6d2cf;
`;

const Li = styled.div`
  padding: 15px;
  text-align: left;
  width: 100%;
  margin: auto;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 50%;
  cursor: pointer;
  &:hover {
    background-color: #8fa9a3;
    color: #c6d2cf;
  }
`;
const Error = styled.div`
  padding: 50px;
  background-color: #ffe7d9;
`;

export const SingleTodo = props => {
  const [editing, setEditing] = React.useState(false);

  return (
    <div style={{ margin: "auto", width: "50vw" }}>
      <Li onClick={() => setEditing(true)} key={props.key}>
        <span>
          <Markup content={props.x} />{" "}
        </span>
        <DeleteThis
          className="deleteLink"
          onClick={() => props.remove(props.x)}
        >
          Delete?
        </DeleteThis>
      </Li>
      <div style={{ padding: "15px", width: "100%" }}>
        <Edit
          changeHandler={props.changeHandler}
          showEditor={editing}
          oldValue={props.x}
        />
      </div>
    </div>
  );
};
