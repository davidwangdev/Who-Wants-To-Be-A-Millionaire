import {useState, useEffect} from 'react'
import Trivia from './Trivia';







export default function Timer({setLost, questionNumber, selectedAnswer}) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if(selectedAnswer) setTimer(30);
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

      {questionNumber === 15 ? 'Congratulations! You Win $1000000!' : 
      <div>
        Time remaining: {timer}s
      </div>}

    </>
  )
}
