import React from "react";
import AppContainer from "./components/AppContainer";
import Applista from "./components/AppLista";
import AppSearch from "./components/AppSearch";
import { useState } from "react";
import AppLista from "./components/AppLista";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function SalvarTexto(e: any){
    setTask(e.target.value);
    console.log(e.target.value);
  }
  function SalvarTarefa(e: any){
    const NovasTasks = [...tasks, task]
    setTasks(NovasTasks);
  }

  return (
    <AppContainer>
      <AppSearch onClick={SalvarTarefa} onChange={SalvarTexto} texto="FamilyFriendly"></AppSearch>

      {tasks.map( (task) => <AppLista name ={task}></AppLista>)}
    </AppContainer>
  )
}

export default App
