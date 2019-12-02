import React, { useEffect } from "react";
import { DefaultEditor } from "react-simple-wysiwyg";

const Edit = props => {
  let showEditor = props.showEditor ? true : false;

  let oldValue = props.oldValue;

  const [value, setValue] = React.useState(oldValue);
  /*

    NOTE: text is the value and key. Therfore not posibble to update state directly

    */
  const showThis = (showEditor, oldValue) => {
    return showEditor ? (
      <div>
        <DefaultEditor
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
        />
        <a onClick={() => props.changeHandler(oldValue, value)} href="#">
          Save
        </a>
      </div>
    ) : null;
  };

  return showThis(showEditor, oldValue);
};
export default Edit;
