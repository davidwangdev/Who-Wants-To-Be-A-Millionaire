import { useEffect, useState } from 'react';
import Timer from './Timer';

function Trivia({data, questionNumber, setWon, setLost, questionID, setQuestionID}) {

  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [curr, setCurr] = useState(0);
  
  useEffect(() => {
    setQuestion(data[questionNumber[curr]]);
  }, [data, curr]);

  function delay(duration, callback) {
    setTimeout(() => {
      callback();
    }, duration);
  }

  function handleClick(answer) {
    setSelectedAnswer(answer);
    setClassName('answer active');
    delay(500, () => {
      if(answer.correct) {
        setClassName('answer correct');
      }
      else {
        setClassName('answer wrong');
      }
    })
    delay(1000, () => {
      if(answer.correct){
        setQuestionID(prev => prev + 1);
        setCurr(prev => prev + 1);
        setSelectedAnswer(null);
      } 
      else{
        setLost(true);
      } 
    });
  }
  
  return (
    <>
      <div className='trivia flex flex-col h-full items-center justify-around '>
        <div className='question text-3xl bg-questionColor w-11/12 border-2 text-center p-5
        hover:bg-darkblue mb-12'>
        {question?.question}
        <Timer setWon={setWon} setLost={setLost} questionNumber={questionNumber} selectedAnswer={selectedAnswer} questionID={questionID} />
        </div>
        <div className='answers flex flex-wrap w-full justify-center'>
          {question?.answers.map(answer => {
            return (
              <div className={selectedAnswer === answer ? className : 'answer'} 
              onClick={() => handleClick(answer)}>
                {answer.text}
              </div>
            )
          })}

        </div>
      </div>
    </>
  )
}

export default Trivia