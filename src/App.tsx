import React, { useState } from "react";
import { Todos } from "./components/Todos";

function App(props: {tab:string}) {
  return (
      <Todos/>
  );
}

export default App;
