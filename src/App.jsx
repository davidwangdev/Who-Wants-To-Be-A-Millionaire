import { useState, useEffect, useMemo } from 'react'
import './App.css'
import Trivia from './components/Trivia.jsx';
import Timer from './components/Timer.jsx';
import Start from './components/Start';





function App() {

  const [questionNumber, setQuestionNumber] = useState(0);
  const [lost, setLost] = useState(false);
  const [earned, setEarned] = useState("$0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Radcliffe",
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
              <div className='h-72 m-auto mb-24 w-full bg-[#8E66FB] border-6 text-center text-4xl'>
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
              <li className={`flex p-1 ${questionNumber + 1 === each.id ? 'bg-orange-500' : ''}`}
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
