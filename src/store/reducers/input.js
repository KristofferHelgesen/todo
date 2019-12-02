import Cookies from "universal-cookie";

const initState = {
  todo: "start stateer hei",
  savedValues: [],
  error: ""
};

function expirationDay() {
  return new Date(Date.now() + 2592000);
}

let cookie = new Cookies();

if (cookie.get("todo")) {
  cookie = cookie.get("todo");
} else {
  cookie.set("todo", initState, {
    path: "/",
    expires: expirationDay()
  });
  cookie = cookie.get("todo");
}

const reducer = (state = cookie, action) => {
  console.log("State", state);
  const type = action.type;
  const value = action.value;

  switch (type) {
    case "ADD":
      state = {
        ...state,
        todo: value
      };

      break;

    case "EDIT":
      let changedFrom = action.changedFrom;
      let array2 = state.savedValues.map(x => {
        if (x === changedFrom) {
          //If found old value re render.
          return value;
        } else {
          return x;
        }
      });

      state = {
        ...state,
        savedValues: array2
      };

      console.log("NEW STATE", state);
      break;

    case "REMOVE":
      let array = state.savedValues.filter(x => {
        return x !== value;
      });
      state = {
        ...state,
        savedValues: array
      };

      break;
    case "SAVE":
      if (state.todo !== "" && !state.savedValues.includes(state.todo)) {
        state = {
          ...state,
          savedValues: state.savedValues.concat(state.todo),
          error: ""
        };
      } else {
        state = {
          ...state,
          error: "You already have a todo named: " + state.todo
        };
      }

      break;
  }
  document.cookie =
    "todo" +
    "=" +
    JSON.stringify(state) +
    "; expires=" +
    expirationDay() +
    ";path=/";

  return state;
};

export default reducer;
