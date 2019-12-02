import React from "react";
import "./App.css";
import CreateToDo from "./components/CreateToDo";
import DisplayToDos from "./components/DisplayToDos";

function App() {
  return (
    <div className="App">
      <CreateToDo />
      <DisplayToDos />
    </div>
  );
}

export default App;
