import React from 'react';


function Hangman({wrongCount, currentWord}) {
    return (
    
        <p  class="max-w-screen-xl mx-auto p-8 text-right">
        +---+<br />
        |&emsp;&emsp;|<br />
        {wrongCount >= 1 ? "😵" : ""}&emsp;&emsp;|<br />
        {wrongCount >= 4 ? "/" : ""}{wrongCount >= 2 ? "|" : ""}{wrongCount >= 3 ? "\\" : ""}&emsp;&emsp;|<br />
        {wrongCount >= 6 ? "/" : ""}{wrongCount >= 5 ? "\\" : ""}&emsp;&emsp;|<br />
            |<br />
      {
      currentWord.map((letter, index) =>(
        <span key={index}>
        {letter.toUpperCase()}&emsp;
        </span>
      ))
      }====<br />       
      </p>

    )
}
export default Hangman;

