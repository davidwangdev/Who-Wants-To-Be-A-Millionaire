import { useState, useEffect, useMemo } from 'react'
import './App.css'
import Trivia from './components/Trivia.jsx';
import Timer from './components/Timer.jsx';
import Start from './components/Start';





function App() {

  function generateRandomNumbers(min, max, count) {
    let numbers = [];
    while (numbers.length < count) {
      let random = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numbers.includes(random)) {
        numbers.push(random);
      }
    }
    return numbers;
  }

  let randomNumbers = generateRandomNumbers(1, 15, 5);
  console.log(randomNumbers);

  const [currentQuestion, setCurrentQuestion] = useState(randomNumbers[0]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [lost, setLost] = useState(false);
  const [earned, setEarned] = useState("$0");

  const data = [
    {
      id: 1,
      question: "1",
      answers: [
        {
          text: "0",
          correct: false,
        },
        {
          text: "1",
          correct: true,
        },
        {
          text: "0",
          correct: false,
        },
        {
          text: "0",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "2",
      answers: [
        {
          text: "2",
          correct: true,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "3",
      answers: [
        {
          text: "1",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "3",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Q4",
      answers: [
        {
          text: "1",
          correct: false,
        },
        {
          text: "4",
          correct: true,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Q5",
      answers: [
        {
          text: "5",
          correct: true,
        },
        {
          text: "4",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "2",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Q6",
      answers: [
        {
          text: "3",
          correct: false,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "6",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "7",
      answers: [
        {
          text: "1",
          correct: false,
        },
        {
          text: "7",
          correct: true,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "8",
      answers: [
        {
          text: "8",
          correct: true,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "9",
      answers: [
        {
          text: "1",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "9",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "10",
      answers: [
        {
          text: "12",
          correct: false,
        },
        {
          text: "10",
          correct: true,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "2",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "11",
      answers: [
        {
          text: "11",
          correct: true,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "12",
      answers: [
        {
          text: "1",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "12",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "13",
      answers: [
        {
          text: "1",
          correct: false,
        },
        {
          text: "13",
          correct: true,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "14",
      answers: [
        {
          text: "14",
          correct: true,
        },
        {
          text: "11",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "15",
      answers: [
        {
          text: "1",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "15",
          correct: true,
        },
      ],
    },
  ];

  const moneyValues = useMemo(() =>
    [
      {id: 15, amount: "$1000000"},
      {id: 14, amount: "$500000"},
      {id: 13, amount: "$250000"},
      {id: 12, amount: "$125000"},
      {id: 11, amount: "$64000"},
      {id: 10, amount: "$32000"},
      {id: 9, amount: "$16000"},
      {id: 8, amount: "$8000"},
      {id: 7, amount: "$4000"},
      {id: 6, amount: "$2000"},
      {id: 5, amount: "$1000"},
      {id: 4, amount: "$500"},
      {id: 3, amount: "$300"},
      {id: 2, amount: "$200"},
      {id: 1, amount: "$100"},
    ], []);
  
  useEffect(() => {
    questionNumber >= 1 && setEarned(moneyValues.find(each => each.id === questionNumber).amount)
  }, [moneyValues, questionNumber])
  

  return (
    <>
    <div className='app'>
      <div className='flex min-h-screen bg-darkblue text-white'>
        {/* Left Container */}
        <div className='main w-3/4 bg-[url("../set.jpg")] bg-cover flex flex-col'>
          {lost ?
            <div className='h-72 m-auto mb-24 w-full bg-darkblue border-6 text-center text-4xl'>
              You earned {earned}!
              <br />
              <button className='rounded-full border-8 border-white p-4 hover:bg-green-500 mt-12'
              onClick={() => window.location.reload()}>
              Try again?
              </button>
              <br />
            </div>
          :
          (
          <>
            <div className='top h-1/2'></div>
            <div className='bottom h-1/2'>
              <Trivia
                data={data}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                setLost={setLost}
                randomNumbers={randomNumbers}
              />
            </div>
          </>
          )}
        </div>

        {/* Right Container */}
        <div className='right w-1/4'>
          <ul className='p-5 mt-24'>

            {moneyValues.map((each) =>
            (
              <li className={`flex p-1 ${each.id === questionNumber + 1 ? 'bg-orange-500' : ''}`}
                key={each.id}>
                <span className='text-xl w-1/3'>{each.id}</span>
                <span className='text-2xl font-light'>{each.amount}</span>
              </li>
            )
            )}

          </ul>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
