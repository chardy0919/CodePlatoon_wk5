import React from 'react';


function Hangman(props) {
    return (
    
        <p>
        +---+<br />
        |&emsp;&emsp;|<br />
        {props.wrongCount >= 1 ? "O" : ""}&emsp;&emsp;|<br />
        {props.wrongCount >= 4 ? "/" : ""}{props.wrongCount >= 2 ? "|" : ""}{props.wrongCount >= 3 ? "\\" : ""}&emsp;&emsp;|<br />
        {props.wrongCount >= 6 ? "/" : ""}{props.wrongCount >= 5 ? "\\" : ""}&emsp;&emsp;|<br />
            |<br />
      {
      props.currentWord.map((letter, index) =>(
        <span key={index}>
        {letter.toUpperCase()}&emsp;
        </span>
      ))
      }====<br />       
      </p>

    )
}
export default Hangman;

