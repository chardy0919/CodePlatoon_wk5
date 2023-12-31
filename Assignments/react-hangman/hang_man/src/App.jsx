import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import Hangman from './components/Hangman'


function App() {
  const [answerInput, setAnswerInput] = useState("")
  const [answerUnsplit, setAnswerUnsplit] = useState("")
  const [wrongCount, setWrongCount] = useState(0)
  const [answer, setAnswer] = useState([])
  const [currentWord, setCurrentWord] = useState([])
  const [message, setMessage] = useState("")
  const [gameOver, setGameOver] = useState(false)
  const [reload, setReload] = useState(0)

  useEffect(()=>{ 

    const getRandomWord = async () => {
      try {
        const response = await axios.get("https://random-word-api.herokuapp.com/word");
        console.log(response.data[0].split(''))
        setAnswer(response.data[0].split(''))
        setAnswerUnsplit(response.data[0])

        console.log(response.data[0].replace(/./g, '_').split(''))
        setCurrentWord(response.data[0].replace(/./g, '_').split(''))

      } catch (error) {
        return ["Error"]
      }
    };
    getRandomWord()

  },[reload])

  const createRandomWord = (e) => {
    setAnswerInput(e.target.value);
  }
  const handleNewGame = (e) => {
    setReload(reload + 1)
    setAnswerInput("")
    setWrongCount(0)
    setMessage("")
    setGameOver(false)
  }
  const handleInputChange = (e) => {
    setAnswerInput(e.target.value);
  }
  const handleSubmit = (e) => {
      let changedOne = false
      let isCompleted = true
      for(let i =0; i < answer.length; i ++){
        if (answerInput == answer[i]){
          currentWord[i] = answerInput
          changedOne = true
        }

        if(currentWord[i] == "_"){
          isCompleted = false
        }
      }
      setCurrentWord(currentWord)
      if (changedOne == false){
        let newWrongCount = wrongCount + 1
        setWrongCount(newWrongCount)
        if(newWrongCount >= 6){
          setMessage(`You lose! The word was... ${answerUnsplit.toUpperCase()}!`)
          setGameOver(true)
        }
      }

      if(isCompleted){
        setMessage("You Win")
        setGameOver(true)
      }

      setAnswerInput("")
    }

  return (
    <>
    <h1 class="flex justify-center m-10 text-xl">HangMan</h1>
    <div class="flex flex-col justify-center">
      <Hangman wrongCount={wrongCount} currentWord={currentWord}/>
      <div class="flex justify-center">
        {
          gameOver
          ?
          (<div>
            <button onClick={()=>handleNewGame()} class="border-s-black">New Game</button>
            <p>{message}</p>
          </div>)
          :
          (<div class="flex">
            <input onChange={(e)=>handleInputChange(e)} type="text" value={answerInput} maxLength="1" class="focus:border-blue-500-1px w-10 bg-slate-100 "/>
            <button onClick={()=>handleSubmit()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg></button>
            <p>{message}</p>
          </div>)
        }
      </div>
    </div>
    </>
  )
}

export default App
