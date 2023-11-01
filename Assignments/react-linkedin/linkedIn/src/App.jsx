import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Import Styles
import './styles/App.css'
import './styles/navbar.css'
import './styles/body.css'

// Import components
import Navbar from './components/navbar.jsx'
import Body from './components/body.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <Body/>
      
    </>
  )
}

export default App
