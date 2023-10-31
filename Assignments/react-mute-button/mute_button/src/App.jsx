import { useState, useEffect } from 'react'
import offButton from './assets/icons/off.svg'
import onButton from './assets/icons/on.svg'
import './App.css'


function App() {
  
  const [muteBut, setMuteBut] = useState(false);
  
  useEffect(()=>{
    console.log(muteBut)
  },[muteBut])

  return (
    <>
    <button><img src = {muteBut? onButton: offButton} onClick={() => setMuteBut(!muteBut)}/></button>
    
    </>
  );
}

export default App
