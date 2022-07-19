import React from "react";
import AppContainer from "./components/AppContainer";
import Applista from "./components/AppLista";
import AppSearch from "./components/AppSearch";
import { useState } from "react";

function App() {
  const [Tasks, setTasks] = useState({});

  var tarefas = [
    {}
  ]

  return (
    <AppContainer>
      <AppSearch texto="fuck"></AppSearch>
      <Applista qualquercoisa="aaa"></Applista>
    </AppContainer>
  )
}

export default App
