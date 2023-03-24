import { useEffect, useState } from 'react';

function Trivia({data, qNum, setQNum, setLost}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  
  useEffect(() => {
    setQuestion(data[qNum]);
  }, [data, qNum])

  function handleClick(answer) {
    setSelectedAnswer(answer);
    
  }
  
  return (
    <>
      <div className='trivia flex flex-col h-full items-center justify-around '>
        <div className='question text-3xl bg-questionColor w-full border-2 text-center p-5 hover:bg-darkblue'>
          {question?.question}
        </div>
        <div className='answers flex flex-wrap w-full justify-center'>
          {question?.answers.map(answer => {
            return (
              <div className='answer w-2/5 p-6 text-center bg-questionColor hover:bg-darkblue
              border-2 rounded-full text-2xl font-light mb-12 mr-12 break-all cursor-pointer' 
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