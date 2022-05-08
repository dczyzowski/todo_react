import React, { useState } from "react";
import { TodoListView } from "./components/TodoList";

function App(props: {tab:string}) {
  return (
    <div id="s">
      <TodoListView/>
    </div>
  );
}


export default App;
