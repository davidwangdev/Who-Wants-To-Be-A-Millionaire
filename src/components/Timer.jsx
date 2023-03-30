import {useState, useEffect} from 'react'
import Trivia from './Trivia';







export default function Timer({setLost, setWon, questionNumber, selectedAnswer, questionID}) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if(selectedAnswer) setTimer(30); //reset timer
    if(timer === 0) return setLost(true);

    let timerInterval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [selectedAnswer, setLost, timer]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber])
  
  return (
    <>
      {questionID === 16 ? setWon(true) : 
      <div>
        Time remaining: {timer}s
      </div>}
    </>
  )
}
