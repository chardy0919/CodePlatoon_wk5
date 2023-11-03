import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainContent from './components/MainContent.jsx'
function App() {
  const [show, setShow] = useState(false);
  
  
  return (
    <>
      <h1 class="text-red-500">Hello Josh and Cody</h1>
      <button onClick={() => setShow(!show)} class={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ${
          show ? 'ring-2 ring-blue-500 focus:ring-2 focus:ring-blue-500' : 'ring-0'
        }`}>{show ? <p>notGreat</p> : <p>isGreat</p>}</button>
      {/* <MainContent/> */}
    </>
  )
}

export default App
