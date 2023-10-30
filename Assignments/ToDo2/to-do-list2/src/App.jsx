import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const addTask = (e) =>{
    e.preventDefault();
    let userInput =document.getElementById('newTask').value
    const list = document.getElementById('tasklist')
    let listItem = document.createElement(`li`)
    listItem.innerText=`${userInput}`
    //Create and append delete button
    let delBut = document.createElement(`button`)
    delBut.addEventListener('click', deleteTask)
    delBut.innerText = 'Delete'
    listItem.appendChild(delBut)
    listItem.addEventListener('click', markComplete)
    list.appendChild(listItem)
  }
  const deleteTask = (e) =>{
    console.log(e.target.parentNode)
    e.target.parentNode.remove()
    // console.log(e.target.parentNode)
  }

  const markComplete = (e) =>{
    let listName = e.target
    document.getElementById('completed').appendChild(listName)
    console.log(listName.child)
    // document.createNewElement('li')
    // completed.appendChild(listName)
  }
  

  return (
    <>
      <h1>My Todo List</h1>
      <div> 
      <form type="submit" onSubmit={(e) => addTask(e)}>
        <input id = 'newTask' type ='text'/>
        <button>Submit</button>
      </form>
      </div>
      <div id = 'sorted'>
        <div>
          <ol id = 'tasklist'></ol>
        </div>
        <div>
          <ol id = 'completed'></ol>
        </div>
      </div>
    </>
  )
}

export default App
