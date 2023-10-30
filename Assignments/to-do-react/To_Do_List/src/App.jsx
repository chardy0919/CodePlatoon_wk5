import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import tasks from "../tasks.json";
function App() {
  //Changes are being applied to the 'u-state' which we havent learned yet
  let idCounter = 0;
  let taskContainer = document.getElementById("task-container");
  const newTask = (e) => {
    e.preventDefault();

    let userInput = document.getElementById("userInput").value;
    let taskObject = document.createElement("div");
    let deleteButton = document.createElement("button");

    //set id for task div
    idCounter++  //increment id
    taskObject.id = `task-${idCounter}`
    taskObject.innerHTML = `<p>${userInput}</p>`;
    taskObject.className = "task"
    
    deleteButton.innerHTML = `x`;
    deleteButton.id = `${idCounter}`
    deleteButton.onclick = function(){
      document.getElementById(`task-${this.id}`).remove()
    }
    
    taskObject.appendChild(deleteButton);
    taskContainer.appendChild(taskObject);
  };
    
  return (
    <>
      <h1> Todo List</h1>
      <div id="form_container">
        {/* form onSubmit={(e) => guessNumber(e)}> */}
        <form onSubmit={(e) => newTask(e)}>
          <input id="userInput" />
          <button type="submit">Submit</button>
        </form>
      </div>
      
    </>
  );
}

export default App;

