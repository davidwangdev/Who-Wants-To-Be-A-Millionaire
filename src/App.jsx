import { useState, useEffect, useMemo } from 'react'
import './App.css'
import Trivia from './components/Trivia.jsx';
import Timer from './components/Timer.jsx';
import Start from './components/Start';





function App() {
  const data = [
    {
      id: 1,
      question: "What is the capital of Japan?",
      answers: [
      {
      text: "Shanghai",
      correct: false,
      },
      {
      text: "Tokyo",
      correct: true,
      },
      {
      text: "Beijing",
      correct: false,
      },
      {
      text: "Seoul",
      correct: false,
      },
      ],
    },
    {
      id: 2,
      question: "Which famous physicist developed the theory of relativity?",
      answers: [
      {
      text: "Isaac Newton",
      correct: false,
      },
      {
      text: "Albert Einstein",
      correct: true,
      },
      {
      text: "Stephen Hawking",
      correct: false,
      },
      {
      text: "Nikola Tesla",
      correct: false,
      },
      ],
    },
    {
      id: 3,
      question: "What is the largest organ in the human body?",
      answers: [
      {
      text: "Heart",
      correct: false,
      },
      {
      text: "Liver",
      correct: false,
      },
      {
      text: "Skin",
      correct: true,
      },
      {
      text: "Lung",
      correct: false,
      },
      ],
    },
    {
      id: 4,
      question: "Who is the author of the novel 'To Kill a Mockingbird'?",
      answers: [
      {
      text: "John Steinbeck",
      correct: false,
      },
      {
      text: "Ernest Hemingway",
      correct: false,
      },
      {
      text: "Harper Lee",
      correct: true,
      },
      {
      text: "J.D. Salinger",
      correct: false,
      },
      ],
    },
    {
      id: 5,
      question: "What is the smallest planet in our solar system?",
      answers: [
      {
      text: "Venus",
      correct: false,
      },
      {
      text: "Mercury",
      correct: true,
      },
      {
      text: "Mars",
      correct: false,
      },
      {
      text: "Pluto",
      correct: false,
      },
      ],
    },
    {
      id: 6,
      question: "What is the largest country in the world by land area?",
      answers: [
      {
      text: "United States",
      correct: false,
      },
      {
      text: "China",
      correct: false,
      },
      {
      text: "Russia",
      correct: true,
      },
      {
      text: "Canada",
      correct: false,
      },
      ],
    },
    {
      id: 7,
      question: "Which famous artist painted the 'Mona Lisa'?",
      answers: [
      {
      text: "Vincent van Gogh",
      correct: false,
      },
      {
      text: "Pablo Picasso",
      correct: false,
      },
      {
      text: "Leonardo da Vinci",
      correct: true,
      },
      {
      text: "Claude Monet",
      correct: false,
      },
      ],
    },
    {
      id: 8,
      question: "What is the chemical symbol for gold?",
      answers: [
      {
      text: "Au",
      correct: true,
      },
      {
      text: "Ag",
      correct: false,
      },
      {
      text: "Hg",
      correct: false,
      },
      {
      text: "Fe",
      correct: false,
      },
      ],
    },
    {
      id: 9,
      question: "What is the name of the longest river in Africa?",
      answers: [
      {
      text: "Nile",
      correct: true,
      },
      {
      text: "Amazon",
      correct: false,
      },
      {
      text: "Yangtze",
      correct: false,
      },
      {
      text: "Mekong",
      correct: false,
      },
      ],
    },
    {
      id: 10,
      question: "Which of the following is a famous work by William Shakespeare?",
      answers: [
      {
      text: "The Great Gatsby",
      correct: false,
      },
      {
      text: "War and Peace",
      correct: false,
      },
      {
      text: "Hamlet",
      correct: true,
      },
      {
      text: "The Catcher in the Rye",
      correct: false,
      },
      ],
    },
    {
      id: 11,
      question: "What is the name of the device used to measure air pressure?",
      answers: [
      {
      text: "Barometer",
      correct: true,
      },
      {
      text: "Thermometer",
      correct: false,
      },
      {
      text: "Hygrometer",
      correct: false,
      },
      {
      text: "Anemometer",
      correct: false,
      },
      ],
    },
    {
      id: 12,
      question: "Which of the following is the national animal of Australia?",
      answers: [
      {
      text: "Kangaroo",
      correct: true,
      },
      {
      text: "Koala",
      correct: false,
      },
      {
      text: "Platypus",
      correct: false,
      },
      {
      text: "Wombat",
      correct: false,
      },
      ],
    },
    {
      id: 13,
      question: "Who is the lead singer of the band U2?",
      answers: [
      {
      text: "Bono",
      correct: true,
      },
      {
      text: "Mick Jagger",
      correct: false,
      },
      {
      text: "Bruce Springsteen",
      correct: false,
      },
      {
      text: "Freddie Mercury",
      correct: false,
      },
      ],
    },
    {
      id: 14,
      question: "What is the smallest bird in the world?",
      answers: [
      {
      text: "Bee Hummingbird",
      correct: true,
      },
      {
      text: "Sparrow",
      correct: false,
      },
      {
      text: "Blue Jay",
      correct: false,
      },
      {
      text: "Penguin",
      correct: false,
      },
      ],
    },
    {
      id: 15,
      question: "What is the smallest country in the world?",
      answers: [
      {
      text: "Vatican City",
      correct: true,
      },
      {
      text: "Monaco",
      correct: false,
      },
      {
      text: "Liechtenstein",
      correct: false,
      },
      {
      text: "San Marino",
      correct: false,
      },
      ],
    },
    {
      id: 16,
      question: "Which planet in our solar system has the most moons?",
      answers: [
      {
      text: "Jupiter",
      correct: true,
      },
      {
      text: "Saturn",
      correct: false,
      },
      {
      text: "Neptune",
      correct: false,
      },
      {
      text: "Uranus",
      correct: false,
      },
      ],
    },
    {
      id: 17,
      question: "What is the currency of Japan?",
      answers: [
      {
      text: "Yuan",
      correct: false,
      },
      {
      text: "Yen",
      correct: true,
      },
      {
      text: "Won",
      correct: false,
      },
      {
      text: "Dollar",
      correct: false,
      },
      ],
    },
    {
      id: 18,
      question: "Who invented the telephone?",
      answers: [
      {
      text: "Thomas Edison",
      correct: false,
      },
      {
      text: "Alexander Graham Bell",
      correct: true,
      },
      {
      text: "Nikola Tesla",
      correct: false,
      },
      {
      text: "Benjamin Franklin",
      correct: false,
      },
      ],
    },    
    {
      id: 19,
      question: "Which country won the first FIFA World Cup in 1930?",
      answers: [
        {
          text: "Uruguay",
          correct: true,
        },
        {
          text: "Brazil",
          correct: false,
        },
        {
          text: "Argentina",
          correct: false,
        },
        {
          text: "Germany",
          correct: false,
        }
      ],
    },
    {
      id: 20,
      question: "Who painted the famous artwork 'The Starry Night'?",
      answers: [
        {
          text: "Leonardo da Vinci",
          correct: false,
        },
        {
          text: "Vincent van Gogh",
          correct: true,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Michelangelo",
          correct: false,
        }
      ],
    },
    {
      id: 21,
      question: "What is the highest mountain in Africa?",
      answers: [
        {
          text: "Mount Everest",
          correct: false,
        },
        {
          text: "Kilimanjaro",
          correct: true,
        },
        {
          text: "Mount Fuji",
          correct: false,
        },
        {
          text: "Mount Denali",
          correct: false,
        }
      ],
    },
    {
      id: 22,
      question: "What type of animal is a seahorse?",
      answers: [
        {
          text: "Fish",
          correct: true,
        },
        {
          text: "Crustacean",
          correct: false,
        },
        {
          text: "Mammal",
          correct: false,
        },
        {
          text: "Reptile",
          correct: false,
        }
      ],
    },
    {
      id: 23,
      question: "What is the capital of Canada?",
      answers: [
        {
          text: "Toronto",
          correct: false,
        },
        {
          text: "Ottawa",
          correct: true,
        },
        {
          text: "Montreal",
          correct: false,
        },
        {
          text: "Vancouver",
          correct: false,
        }
      ],
    },
    {
      id: 24,
      question: "Who wrote the novel 'The Great Gatsby'?",
      answers: [
        {
          text: "Ernest Hemingway",
          correct: false,
        },
        {
          text: "F. Scott Fitzgerald",
          correct: true,
        },
        {
          text: "J.D. Salinger",
          correct: false,
        },
        {
          text: "Mark Twain",
          correct: false,
        }
      ],
    },    
    {
      id: 25,
      question: "What is the smallest ocean in the world?",
      answers: [
        {
          text: "Indian Ocean",
          correct: false,
        },
        {
          text: "Pacific Ocean",
          correct: false,
        },
        {
          text: "Atlantic Ocean",
          correct: false,
        },
        {
          text: "Arctic Ocean",
          correct: true,
        },
      ],
    },
    {
      id: 26,
      question: "Which metal is liquid at room temperature?",
      answers: [
        {
          text: "Gold",
          correct: false,
        },
        {
          text: "Copper",
          correct: false,
        },
        {
          text: "Mercury",
          correct: true,
        },
        {
          text: "Iron",
          correct: false,
        },
      ],
    },
    {
      id: 27,
      question: "What is the capital of Australia?",
      answers: [
        {
          text: "Sydney",
          correct: false,
        },
        {
          text: "Melbourne",
          correct: false,
        },
        {
          text: "Canberra",
          correct: true,
        },
        {
          text: "Brisbane",
          correct: false,
        },
      ],
    },
    {
      id: 28,
      question: "What is the world's largest desert?",
      answers: [
        {
          text: "Sahara",
          correct: true,
        },
        {
          text: "Arabian",
          correct: false,
        },
        {
          text: "Gobi",
          correct: false,
        },
        {
          text: "Kalahari",
          correct: false,
        },
      ],
    },
    {
      id: 29,
      question: "What is the currency of Switzerland?",
      answers: [
        {
          text: "Euro",
          correct: false,
        },
        {
          text: "Franc",
          correct: true,
        },
        {
          text: "Pound",
          correct: false,
        },
        {
          text: "Dollar",
          correct: false,
        },
      ],
    },
    {
      id: 30,
      question: "What is the capital of South Africa?",
      answers: [
        {
          text: "Cape Town",
          correct: false,
        },
        {
          text: "Pretoria",
          correct: true,
        },
        {
          text: "Johannesburg",
          correct: false,
        },
        {
          text: "Durban",
          correct: false,
        },
      ],
    },  
    {
      id: 31,
      question: "Who wrote the novel 'Ulysses'?",
      answers: [
        {
          text: "James Joyce",
          correct: true,
        },
        {
          text: "Virginia Woolf",
          correct: false,
        },
        {
          text: "William Faulkner",
          correct: false,
        },
        {
          text: "F. Scott Fitzgerald",
          correct: false,
        },
      ],
    },
    {
      id: 32,
      question: "Which famous artist painted the ceiling of the Sistine Chapel in Rome?",
      answers: [
      {
      text: "Leonardo da Vinci",
      correct: false,
      },
      {
      text: "Michelangelo",
      correct: true,
      },
      {
      text: "Raphael",
      correct: false,
      },
      {
      text: "Vincent van Gogh",
      correct: false,
      },
      ],
    },
    {
      id: 33,
      question: "Who was the first man to walk on the moon?",
      answers: [
      {
      text: "Neil Armstrong",
      correct: true,
      },
      {
      text: "Buzz Aldrin",
      correct: false,
      },
      {
      text: "Yuri Gagarin",
      correct: false,
      },
      {
      text: "John Glenn",
      correct: false,
      },
      ],
    },
    {
      id: 34,
      question: "Who wrote the famous novel '1984'?",
      answers: [
      {
      text: "George Orwell",
      correct: true,
      },
      {
      text: "Aldous Huxley",
      correct: false,
      },
      {
      text: "F. Scott Fitzgerald",
      correct: false,
      },
      {
      text: "Ernest Hemingway",
      correct: false,
      },
      ],
    },
    {
      id: 35,
      question: "What is the largest species of bear?",
      answers: [
      {
      text: "Polar bear",
      correct: false,
      },
      {
      text: "Grizzly bear",
      correct: false,
      },
      {
      text: "Kodiak bear",
      correct: true,
      },
      {
      text: "Black bear",
      correct: false,
      },
      ],
    },
    {
      id: 36,
      question: "Which country consumes the most chocolate per capita?",
      answers: [
        {
          text: "Switzerland",
          correct: true,
        },
        {
          text: "Belgium",
          correct: false,
        },
        {
          text: "France",
          correct: false,
        },
        {
          text: "Germany",
          correct: false,
        },
      ],
    },
    {
      id: 37,
      question: "What is the name of the highest mountain in North America?",
      answers: [
        {
          text: "Mount Kilimanjaro",
          correct: false,
        },
        {
          text: "Denali",
          correct: true,
        },
        {
          text: "Mount Everest",
          correct: false,
        },
        {
          text: "Mount Whitney",
          correct: false,
        },
      ],
    },
    {
      id: 38,
      question: "What is the name of the largest island in the Mediterranean Sea?",
      answers: [
        {
          text: "Corsica",
          correct: false,
        },
        {
          text: "Crete",
          correct: false,
        },
        {
          text: "Cyprus",
          correct: false,
        },
        {
          text: "Sicily",
          correct: true,
        },
      ],
    },
    {
      id: 39,
      question: "What is the name of the longest river in Asia?",
      answers: [
        {
          text: "Yangtze",
          correct: false,
        },
        {
          text: "Ganges",
          correct: false,
        },
        {
          text: "Mekong",
          correct: false,
        },
        {
          text: "Yellow River",
          correct: true,
        },
      ],
    },
    {
      id: 40,
      question: "What is the name of the deepest ocean on Earth?",
      answers: [
        {
          text: "Indian Ocean",
          correct: false,
        },
        {
          text: "Atlantic Ocean",
          correct: false,
        },
        {
          text: "Arctic Ocean",
          correct: false,
        },
        {
          text: "Pacific Ocean",
          correct: true,
        },
      ],
    },
    {
      id: 41,
      question: "What is the name of the first woman to win a Nobel Prize?",
      answers: [
        {
          text: "Marie Curie",
          correct: true,
        },
        {
          text: "Rosalind Franklin",
          correct: false,
        },
        {
          text: "Dorothy Hodgkin",
          correct: false,
        },
        {
          text: "Lise Meitner",
          correct: false,
        },
      ],
    },
    {
      id: 42,
      question: "What is the name of the author of the Harry Potter series of books?",
      answers: [
        {
          text: "J.K. Rowling",
          correct: true,
        },
        {
          text: "Stephenie Meyer",
          correct: false,
        },
        {
          text: "Suzanne Collins",
          correct: false,
        },
        {
          text: "Veronica Roth",
          correct: false,
        },
      ],
    },
    {
      id: 43,
      question: "What is the term for the fear of long words?",
      answers: [
        {
          text: "Hippopotomonstrosesquipedaliophobia",
          correct: true,
        },
        {
          text: "Acrophobia",
          correct: false,
        },
        {
          text: "Arachnophobia",
          correct: false,
        },
        {
          text: "Agoraphobia",
          correct: false,
        },
      ],
    },
    {
      id: 44,
      question: "What was the original name of New York City?",
      answers: [
        {
          text: "New Amsterdam",
          correct: true,
        },
        {
          text: "New London",
          correct: false,
        },
        {
          text: "New Paris",
          correct: false,
        },
        {
          text: "New Madrid",
          correct: false,
        },
      ],
    },
    {
      id: 45,
      question: "Who painted the famous artwork 'The Persistence of Memory'?",
      answers: [
        {
          text: "Vincent van Gogh",
          correct: false,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Salvador Dalí",
          correct: true,
        },
        {
          text: "Claude Monet",
          correct: false,
        },
      ],
    },
    {
      id: 46,
      question: "Which musical instrument has keys, pedals, and strings?",
      answers: [
        {
          text: "Guitar",
          correct: false,
        },
        {
          text: "Piano",
          correct: true,
        },
        {
          text: "Trumpet",
          correct: false,
        },
        {
          text: "Drums",
          correct: false,
        },
      ],
    },
    {
      id: 47,
      question: "What is the most widely spoken language in Brazil?",
      answers: [
        {
          text: "Portuguese",
          correct: true,
        },
        {
          text: "Spanish",
          correct: false,
        },
        {
          text: "English",
          correct: false,
        },
        {
          text: "French",
          correct: false,
        },
      ],
    },
    {
      id: 48,
      question: "Who wrote the book 'The Catcher in the Rye'?",
      answers: [
        {
          text: "J.D. Salinger",
          correct: true,
        },
        {
          text: "F. Scott Fitzgerald",
          correct: false,
        },
        {
          text: "Harper Lee",
          correct: false,
        },
        {
          text: "William Faulkner",
          correct: false,
        },
      ],
    },
  ];

  useEffect(() => {
    function generateRandomNumbers(min1, min2, min3, max1, max2, max3, count) {
      let numbers = [];
      while (numbers.length < 5) {
        let random = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
        if (!numbers.includes(random)) {
          numbers.push(random);
        }
      }
      while (numbers.length < 10) {
        let random = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
        if (!numbers.includes(random)) {
          numbers.push(random);
        }
      }
      while (numbers.length < 15) {
        let random = Math.floor(Math.random() * (max3 - min3 + 1)) + min3;
        if (!numbers.includes(random)) {
          numbers.push(random);
        }
      }
      return numbers;
    }
    setQuestionNumber(generateRandomNumbers(1, 16, 31, 15, 32, 47, 15));
  }, [])

  const [questionNumber, setQuestionNumber] = useState([]);
  const [questionID, setQuestionID] = useState(1);
  const [lost, setLost] = useState(false);
  const [earned, setEarned] = useState("$0");

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
    questionID > 1 && setEarned(moneyValues.find(each => each.id === questionID - 1).amount)
  }, [questionID]);
  
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
                questionID={questionID}
                setQuestionID={setQuestionID}
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
              <li className={`flex p-1 ${questionID === each.id ? 'bg-orange-500' : ''}`}
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
