import { useState, useEffect, useMemo } from 'react'
import './App.css'
import Trivia from './components/Trivia.jsx';
import Timer from './components/Timer.jsx';
import Start from './components/Start';



function App() {
  const data = useMemo(() => 
  [
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
      question: "What is the smallest country in the world by land area?",
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
      question: "What is the name of the famous female singer who is known as the Queen of Pop?",
      answers: [
        {
          text: "Cher",
          correct: false,
        },
        {
          text: "Madonna",
          correct: true,
        },
        {
          text: "Whitney Houston",
          correct: false,
        },
        {
          text: "Tina Turner",
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
      question: "Which country has the largest population in the world?",
      answers: [
        {
          text: "India",
          correct: false,
        },
        {
          text: "China",
          correct: true,
        },
        {
          text: "United States",
          correct: false,
        },
        {
          text: "Indonesia",
          correct: false,
        },
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
          text: "Mount Kilimanjaro",
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
      question: "Which US state is known as the 'Sunshine State'?",
      answers: [
        {
          text: "California",
          correct: false,
        },
        {
          text: "Florida",
          correct: true,
        },
        {
          text: "Texas",
          correct: false,
        },
        {
          text: "Arizona",
          correct: false,
        },
      ],
    },
    {
      id: 30,
      question: "Which famous novel by Mark Twain features the character Tom Sawyer?",
      answers: [
        {
          text: "Adventures of Sherlock Holmes",
          correct: false,
        },
        {
          text: "To Kill a Mockingbird",
          correct: false,
        },
        {
          text: "The Catcher in the Rye",
          correct: false,
        },
        {
          text: "Adventures of Huckleberry Finn",
          correct: true,
        },
      ],
    },
    {
      id: 31,
      question: "What is the meaning of the French phrase 'cul-de-sac'?",
      answers: [
        {
          text: "Dead end",
          correct: true,
        },
        {
          text: "Traffic circle",
          correct: false,
        },
        {
          text: "Roundabout",
          correct: false,
        },
        {
          text: "Highway",
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
      text: "Aldous Huxley",
      correct: false,
      },
      {
      text: "F. Scott Fitzgerald",
      correct: false,
      },
      {
        text: "George Orwell",
        correct: true,
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
          text: "Mount Denali",
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
      question: "What is the name of the largest island in the Mediterranean Sea by land area?",
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
        {
          text: "Marie Curie",
          correct: true,
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
    {
      id: 49,
      question: "What is the smallest unit of measurement in the metric system?",
      answers: [
        {
          text: "Nanometer",
          correct: false,
        },
        {
          text: "Picometer",
          correct: false,
        },
        {
          text: "Micrometer",
          correct: false,
        },
        {
          text: "Femtometer",
          correct: true,
        },
      ],
    },
    {
      id: 50,
      question: "Who is the current president of France?",
      answers: [
        {
          text: "François Hollande",
          correct: false,
        },
        {
          text: "Nicolas Sarkozy",
          correct: false,
        },
        {
          text: "Emmanuel Macron",
          correct: true,
        },
        {
          text: "Jacques Chirac",
          correct: false,
        },
      ],
    },
    {
      id: 51,
      question: "What is the scientific name for the human tailbone?",
      answers: [
        {
          text: "Sacrum",
          correct: false,
        },
        {
          text: "Coccyx",
          correct: true,
        },
        {
          text: "Femur",
          correct: false,
        },
        {
          text: "Radius",
          correct: false,
        },
      ],
    },
    {
      id: 52,
      question: "Which country is the largest producer of coffee in the world?",
      answers: [
        {
          text: "Colombia",
          correct: false,
        },
        {
          text: "Ethiopia",
          correct: false,
        },
        {
          text: "Vietnam",
          correct: false,
        },
        {
          text: "Brazil",
          correct: true,
        },
      ],
    }, 
    {
      id: 53,
      question: "Which animal is capable of regenerating its limbs?",
      answers: [
        {
          text: "Axolotl",
          correct: true,
        },
        {
          text: "Salamander",
          correct: false,
        },
        {
          text: "Gecko",
          correct: false,
        },
        {
          text: "Chameleon",
          correct: false,
        },
      ],
    },
    {
      id: 54,
      question: "What is the name of the British mathematician who is considered the father of computer science?",
      answers: [
        {
          text: "Alan Turing",
          correct: true,
        },
        {
          text: "Isaac Newton",
          correct: false,
        },
        {
          text: "Charles Babbage",
          correct: false,
        },
        {
          text: "Blaise Pascal",
          correct: false,
        },
      ],
    },
    {
      id: 55,
      question: "What is the name of the philosopher who wrote 'The Republic'?",
      answers: [
        {
          text: "Plato",
          correct: true,
        },
        {
          text: "Aristotle",
          correct: false,
        },
        {
          text: "Socrates",
          correct: false,
        },
        {
          text: "Confucius",
          correct: false,
        },
      ],
    },
    {
      id: 56,
      question: "What is the name of the phenomenon where an electron behaves like both a particle and a wave?",
      answers: [
        {
          text: "Wave-particle duality",
          correct: true,
        },
        {
          text: "Quantum entanglement",
          correct: false,
        },
        {
          text: "Quantum tunneling",
          correct: false,
        },
        {
          text: "Blackbody radiation",
          correct: false,
        },
      ],
    },
    {
      id: 57,
      question: "Who is the author of 'Crime and Punishment'?",
      answers: [
        {
          text: "Leo Tolstoy",
          correct: false,
        },
        {
          text: "Fyodor Dostoevsky",
          correct: true,
        },
        {
          text: "Anton Chekhov",
          correct: false,
        },
        {
          text: "Vladimir Nabokov",
          correct: false,
        },
      ],
    },
    {
      id: 58,
      question: "What is the name of the nearest spiral galaxy to our own Milky Way?",
      answers: [
        {
          text: "Andromeda",
          correct: true,
        },
        {
          text: "Orion",
          correct: false,
        },
        {
          text: "Cepheus",
          correct: false,
        },
        {
          text: "Virgo",
          correct: false,
        },
      ],
    },
    {
      id: 59,
      question: "What is the name of the process where a solid changes directly into a gas without becoming a liquid first?",
      answers: [
        {
          text: "Melting",
          correct: false,
        },
        {
          text: "Freezing",
          correct: false,
        },
        {
          text: "Condensation",
          correct: false,
        },
        {
          text: "Sublimation",
          correct: true,
        },
      ],
    },
    {
      id: 60,
      question: "What is the name of the fundamental force that holds atoms together?",
      answers: [
        {
          text: "Gravity",
          correct: false,
        },
        {
          text: "Electromagnetism",
          correct: false,
        },
        {
          text: "Strong nuclear force",
          correct: true,
        },
        {
          text: "Weak nuclear force",
          correct: false,
        },
      ],
    },
    {
      id: 61,
      question: "What is the name of the phenomenon where light bends as it passes through a medium?",
      answers: [
        {
          text: "Diffraction",
          correct: false,
        },
        {
          text: "Refraction",
          correct: true,
        },
        {
          text: "Reflection",
          correct: false,
        },
        {
          text: "Dispersion",
          correct: false,
        },
      ],
    },
    {
      id: 62,
      question: "What is the primary unit of measure for frequency?",
      answers: [
        {
          text: "Meters",
          correct: false,
        },
        {
          text: "Hertz",
          correct: true,
        },
        {
          text: "Seconds",
          correct: false,
        },
        {
          text: "Watts",
          correct: false,
        },
      ],
    },
    {
      id: 63,
      question: "Which noble gas has the lowest atomic number?",
      answers: [
        {
          text: "Helium",
          correct: true,
        },
        {
          text: "Neon",
          correct: false,
        },
        {
          text: "Argon",
          correct: false,
        },
        {
          text: "Xenon",
          correct: false,
        },
      ],
    },
    {
      id: 64,
      question: "What is the process by which plants convert light energy into chemical energy?",
      answers: [
        {
          text: "Respiration",
          correct: false,
        },
        {
          text: "Fermentation",
          correct: false,
        },
        {
          text: "Photosynthesis",
          correct: true,
        },
        {
          text: "Digestion",
          correct: false,
        },
      ],
    },
    {
      id: 65,
      question: "What is the smallest unit of life?",
      answers: [
        {
          text: "Atom",
          correct: false,
        },
        {
          text: "Molecule",
          correct: false,
        },
        {
          text: "Cell",
          correct: true,
        },
        {
          text: "Organ",
          correct: false,
        },
      ],
    },
    {
      id: 66,
      question: "Which country is home to the Great Barrier Reef?",
      answers: [
        {
          text: "Indonesia",
          correct: false,
        },
        {
          text: "Australia",
          correct: true,
        },
        {
          text: "Thailand",
          correct: false,
        },
        {
          text: "Philippines",
          correct: false,
        },
      ],
    },
    {
      id: 67,
      question: "Who is the founder of Microsoft?",
      answers: [
        {
          text: "Bill Gates",
          correct: true,
        },
        {
          text: "Steve Jobs",
          correct: false,
        },
        {
          text: "Mark Zuckerberg",
          correct: false,
        },
        {
          text: "Jeff Bezos",
          correct: false,
        },
      ],
    },
    {
      id: 68,
      question: "Which country is home to the ancient city of Petra?",
      answers: [
        {
          text: "Greece",
          correct: false,
        },
        {
          text: "Jordan",
          correct: true,
        },
        {
          text: "Egypt",
          correct: false,
        },
        {
          text: "Israel",
          correct: false,
        },
      ],
    },
    {
      id: 69,
      question: "What is the Schrodinger equation?",
      answers: [
        {
          text: "A mathematical equation that describes the behavior of subatomic particles",
          correct: true,
        },
        {
          text: "An equation that describes the motion of planets",
          correct: false,
        },
        {
          text: "An equation that describes the behavior of waves",
          correct: false,
        },
        {
          text: "An equation that describes the behavior of gases",
          correct: false,
        },
      ],
    },
    {
      id: 70,
      question: "Which city is known as the 'City of Love'?",
      answers: [
        {
          text: "New York City",
          correct: false,
        },
        {
          text: "Paris",
          correct: true,
        },
        {
          text: "Venice",
          correct: false,
        },
        {
          text: "Rome",
          correct: false,
        },
      ],
    },
    {
      id: 71,
      question: "What is the name of the nearest star to our Solar System?",
      answers: [
        {
          text: "Alpha Centauri",
          correct: false,
        },
        {
          text: "Betelgeuse",
          correct: false,
        },
        {
          text: "Proxima Centauri",
          correct: true,
        },
        {
          text: "Sirius",
          correct: false,
        },
      ],
    },
    {
      id: 72,
      question: "What is the meaning of the acronym 'HTTP'?",
      answers: [
        {
          text: "Hypertext Transfer Protocol",
          correct: true,
        },
        {
          text: "Hypertext Transmission Protocol",
          correct: false,
        },
        {
          text: "Hyperlink Transmission Protocol",
          correct: false,
        },
        {
          text: "Hyperlink Transfer Protocol",
          correct: false,
        },
      ],
    },
    {
      id: 73,
      question: "Which country is known for inventing the game of cricket?",
      answers: [
        {
          text: "India",
          correct: false,
        },
        {
          text: "England",
          correct: true,
        },
        {
          text: "Australia",
          correct: false,
        },
        {
          text: "South Africa",
          correct: false,
        },
      ],
    },
    {
      id: 74,
      question: "What is the capital city of Peru?",
      answers: [
        {
          text: "Santiago",
          correct: false,
        },
        {
          text: "Bogotá",
          correct: false,
        },
        {
          text: "Lima",
          correct: true,
        },
        {
          text: "Quito",
          correct: false,
        },
      ],
    },
    {
      id: 75,
      question: "Which famous movie director directed the 1979 movie 'Apocalypse Now'?",
      answers: [
        {
          text: "Francis Ford Coppola",
          correct: true,
        },
        {
          text: "Steven Spielberg",
          correct: false,
        },
        {
          text: "Alfred Hitchcock",
          correct: false,
        },
        {
          text: "Martin Scorsese",
          correct: false,
        },
      ],
    },

    {
      id: 76,
      question: "Which famous actor played the character of Forrest Gump?",
      answers: [
        {
          text: "Tom Hanks",
          correct: true,
        },
        {
          text: "Johnny Depp",
          correct: false,
        },
        {
          text: "Leonardo DiCaprio",
          correct: false,
        },
        {
          text: "Brad Pitt",
          correct: false,
        },
      ],
    },

    {
      id: 77,
      question: "What is the name of the character played by Keanu Reeves in 'The Matrix'?",
      answers: [
        {
          text: "Neo",
          correct: true,
        },
        {
          text: "Trinity",
          correct: false,
        },
        {
          text: "Morpheus",
          correct: false,
        },
        {
          text: "Agent Smith",
          correct: false,
        },
      ],
    },
    {
      id: 78,
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
      id: 79,
      question: "What is the capital of Croatia?",
      answers: [
        {
          text: "Pula",
          correct: false,
        },
        {
          text: "Zagreb",
          correct: true,
        },
        {
          text: "Zadar",
          correct: false,
        },
        {
          text: "Trogir",
          correct: false,
        },
      ],
    },
    {
      id: 80,
      question: "Who wrote the novel 'Ulysses'?",
      answers: [
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
        {
          text: "James Joyce",
          correct: true,
        },
      ],
    },
    {
      id: 81,
      question: "Who directed the film 'Jaws'?",
      answers: [
        {
          text: "Steven Spielberg",
          correct: true,
        },
        {
          text: "George Lucas",
          correct: false,
        },
        {
          text: "Martin Scorsese",
          correct: false,
        },
        {
          text: "Quentin Tarantino",
          correct: false,
        },
      ],
    },
    {
      id: 82,
      question: "Which team won the NBA Championship in 2001?",
      answers: [
        {
          text: "San Antonio Spurs",
          correct: false,
        },
        {
          text: "Chicago Bulls",
          correct: false,
        },
        {
          text: "Los Angeles Lakers",
          correct: true,
        },
        {
          text: "Philadelphia 76ers",
          correct: false,
        },
      ],
    },
    {
      id: 83,
      question: "Which of these is not a color of the rainbow?",
      answers: [
        {
          text: "Red",
          correct: false,
        },
        {
          text: "Indigo",
          correct: false,
        },
        {
          text: "Pink",
          correct: true,
        },
        {
          text: "Violet",
          correct: false,
        },
      ],
    },
    {
      id: 84,
      question: "Who wrote the novel 'One Hundred Years of Solitude'?",
      answers: [
        {
          text: "Gabriel Garcia Marquez",
          correct: true,
        },
        {
          text: "Jorge Luis Borges",
          correct: false,
        },
        {
          text: "Pablo Neruda",
          correct: false,
        },
        {
          text: "Isabel Allende",
          correct: false,
        },
      ],
    },
    {
      id: 85,
      question: "What is the name of the national airline of Australia?",
      answers: [
        {
          text: "Qantas",
          correct: true,
        },
        {
          text: "Virgin Australia",
          correct: false,
        },
        {
          text: "Jetstar",
          correct: false,
        },
        {
          text: "Tigerair Australia",
          correct: false,
        },
      ],
    },
    {
      id: 86,
      question: "In which year did the Spanish Civil War end?",
      answers: [
        {
          text: "1933",
          correct: false,
        },
        {
          text: "1939",
          correct: true,
        },
        {
          text: "1945",
          correct: false,
        },
        {
          text: "1956",
          correct: false,
        },
      ],
    },
    {
      id: 87,
      question: "Who won the Academy Award for Best Actor in a Leading Role in 2021?",
      answers: [
        {
          text: "Anthony Hopkins",
          correct: true,
        },
        {
          text: "Chadwick Boseman",
          correct: false,
        },
        {
          text: "Gary Oldman",
          correct: false,
        },
        {
          text: "Riz Ahmed",
          correct: false,
        },
      ]
    },
    {
      id: 88,
      question: "Which US state is the smallest by land area?",
      answers: [
        {
          text: "Connecticut",
          correct: false,
        },
        {
          text: "Delaware",
          correct: false,
        },
        {
          text: "Rhode Island",
          correct: true,
        },
        {
          text: "Hawaii",
          correct: false,
        },
      ],
    },
    {
      id: 89,
      question: "What is the largest animal on Earth?",
      answers: [
        {
          text: "African elephant",
          correct: false,
        },
        {
          text: "Blue whale",
          correct: true,
        },
        {
          text: "Giraffe",
          correct: false,
        },
        {
          text: "Hippopotamus",
          correct: false,
        },
      ],
    }, 
    {
      id: 90,
      question: "What is the highest waterfall in the world?",
      answers: [
        {
          text: "Angel Falls",
          correct: true,
        },
        {
          text: "Niagara Falls",
          correct: false,
        },
        {
          text: "Iguazu Falls",
          correct: false,
        },
        {
          text: "Victoria Falls",
          correct: false,
        },
      ],
    },
    {
      id: 91,
      question: 'What year was the original "Jurassic Park" movie released?',
      answers: [
        {
          text: "1989",
          correct: false,
        },
        {
          text: "1993",
          correct: true,
        },
        {
          text: "1997",
          correct: false,
        },
        {
          text: "2001",
          correct: false,
        },
      ],
    },
    {
      id: 92,
      question: "What is the deepest point in the ocean?",
      answers: [
        {
          text: "Mariana Trench",
          correct: true,
        },
        {
          text: "Puerto Rico Trench",
          correct: false,
        },
        {
          text: "Java Trench",
          correct: false,
        },
        {
          text: "Philippine Trench",
          correct: false,
        },
      ],
    },
    {
      id: 93,
      question: "What is the name of the highest active volcano in Europe?",
      answers: [
        {
          text: "Mount Vesuvius",
          correct: false,
        },
        {
          text: "Mount Etna",
          correct: true,
        },
        {
          text: "Mount Stromboli",
          correct: false,
        },
        {
          text: "Mount Teide",
          correct: false,
        },
      ],
    },
    {
      id: 94,
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
      id: 95,
      question: "What is the largest island in the world?",
      answers: [
        {
          text: "Greenland",
          correct: true,
        },
        {
          text: "Australia",
          correct: false,
        },
        {
          text: "Borneo",
          correct: false,
        },
        {
          text: "Madagascar",
          correct: false,
        },
      ],
    },
    {
      id: 96,
      question: "What is the name of the world's largest coral reef system?",
      answers: [
        {
          text: "Great Barrier Reef",
          correct: true,
        },
        {
          text: "Coral Triangle",
          correct: false,
        },
        {
          text: "Red Sea Coral Reef",
          correct: false,
        },
        {
          text: "Mesoamerican Reef",
          correct: false,
        },
      ],
    },
    {
      id: 97,
      question: "What is the largest river in the world by volume?",
      answers: [
        {
          text: "Nile River",
          correct: false,
        },
        {
          text: "Amazon River",
          correct: true,
        },
        {
          text: "Mississippi River",
          correct: false,
        },
        {
          text: "Yangtze River",
          correct: false,
        },
      ],
    },
    {
      id: 98,
      question: "What is the largest fish in the world?",
      answers: [
        {
          text: "Tuna",
          correct: false,
        },
        {
          text: "Swordfish",
          correct: false,
        },
        {
          text: "Great White Shark",
          correct: false,
        },
        {
          text: "Whale Shark",
          correct: true,
        },
      ]
    },
    {
      id: 99,
      question: "Who wrote the famous novel 'Pride and Prejudice'?",
      answers: [
        {
          text: "Emily Bronte",
          correct: false,
        },
        {
          text: "Jane Austen",
          correct: true,
        },
        {
          text: "Charlotte Bronte",
          correct: false,
        },
        {
          text: "Virginia Woolf",
          correct: false,
        },
      ],
    },
    {
      id: 100,
      question: "When was first American football match played?",
      answers: [
        {
          text: "1912",
          correct: false,
        },
        {
          text: "1869",
          correct: true,
        },
        {
          text: "1884",
          correct: false,
        },
        {
          text: "1933",
          correct: false,
        },
      ],
    },
    {
      id: 101,
      question: "Who was the first emperor of Rome?",
      answers: [
        {
          text: "Augustus",
          correct: true,
        },
        {
          text: "Julius Caesar",
          correct: false,
        },
        {
          text: "Nero",
          correct: false,
        },
        {
          text: "Trajan",
          correct: false,
        },
      ],
    },
    {
      id: 102,
      question: "Which two countries fought in the 'Hundred Years War'?",
      answers: [
        {
          text: "France and Spain",
          correct: false,
        },
        {
          text: "England and Germany",
          correct: false,
        },
        {
          text: "France and England",
          correct: true,
        },
        {
          text: "Italy and Greece",
          correct: false,
        },
      ],
    },
    {
      id: 103,
      question: "Who was the first woman to be elected as the Prime Minister of a country?",
      answers: [
        {
          text: "Golda Meir",
          correct: true,
        },
        {
          text: "Indira Gandhi",
          correct: false,
        },
        {
          text: "Margaret Thatcher",
          correct: false,
        },
        {
          text: "Benazir Bhutto",
          correct: false,
        },
      ],
    },
    {
      id: 104,
      question: "Who was the first African American Supreme Court Justice?",
      answers: [
        {
          text: "Thurgood Marshall",
          correct: true,
        },
        {
          text: "Clarence Thomas",
          correct: false,
        },
        {
          text: "Ruth Bader Ginsburg",
          correct: false,
        },
        {
          text: "Sandra Day O'Connor",
          correct: false,
        },
      ],
    },
    {
      id: 105,
      question: "What was the last major battle of the American Civil War?",
      answers: [
        {
          text: "Battle of Shiloh",
          correct: false,
        },
        {
          text: "Battle of Gettysburg",
          correct: false,
        },
        {
          text: "Battle of Antietam",
          correct: false,
        },
        {
          text: "Battle of Appomattox Courthouse",
          correct: true,
        },
      ],
    },
    {
      id: 106,
      question: "Who was the first U.S. president to be impeached?",
      answers: [
        {
          text: "Richard Nixon",
          correct: false,
        },
        {
          text: "Andrew Johnson",
          correct: true,
        },
        {
          text: "Bill Clinton",
          correct: false,
        },
        {
          text: "Donald Trump",
          correct: false,
        },
      ],
    },
    {
      id: 107,
      question: "Which planet in our solar system has the shortest day?",
      answers: [
        {
          text: "Mercury",
          correct: false,
        },
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Jupiter",
          correct: true,
        },
      ],
    },
    {
      id: 108,
      question: "Who was the first American astronaut to orbit the Earth?",
      answers: [
        {
          text: "Alan Shepard",
          correct: false,
        },
        {
          text: "John Glenn",
          correct: true,
        },
        {
          text: "Neil Armstrong",
          correct: false,
        },
        {
          text: "Buzz Aldrin",
          correct: false,
        },
      ],
    },
    {
      id: 109,
      question: "What is the capital city of New Zealand?",
      answers: [
        {
          text: "Auckland",
          correct: false,
        },
        {
          text: "Christchurch",
          correct: false,
        },
        {
          text: "Wellington",
          correct: true,
        },
        {
          text: "Queenstown",
          correct: false,
        },
      ],
    },
    {
      id: 110,
      question: "Which country was the first to recognize the independence of the United States?",
      answers: [
        {
          text: "France",
          correct: true,
        },
        {
          text: "Spain",
          correct: false,
        },
        {
          text: "Great Britain",
          correct: false,
        },
        {
          text: "Germany",
          correct: false,
        },
      ],
    },
    {
      id: 111,
      question: "Who was the first U.S. president to visit China?",
      answers: [
        {
          text: "Jimmy Carter",
          correct: false,
        },
        {
          text: "Richard Nixon",
          correct: true,
        },
        {
          text: "Ronald Reagan",
          correct: false,
        },
        {
          text: "Dwight Eisenhower",
          correct: false,
        },
      ],
    },
    {
      id: 112,
      question: "Who was the first European explorer to reach the Americas?",
      answers: [
        {
          text: "Christopher Columbus",
          correct: false,
        },
        {
          text: "Ferdinand Magellan",
          correct: false,
        },
        {
          text: "Leif Erikson",
          correct: true,
        },
        {
          text: "Marco Polo",
          correct: false,
        },
      ],
    },
    {
      id: 113,
      question: "Which ancient civilization was responsible for the creation of the Pyramids of Giza?",
      answers: [
        {
          text: "Persians",
          correct: false,
        },
        {
          text: "Greeks",
          correct: false,
        },
        {
          text: "Romans",
          correct: false,
        },
        {
          text: "Egyptians",
          correct: true,
        },
      ],
    },
    {
      id: 114,
      question: "What was the name of the ancient Chinese philosophy developed by Laozi?",
      answers: [
        {
          text: "Taoism",
          correct: true,
        },
        {
          text: "Confucianism",
          correct: false,
        },
        {
          text: "Legalism",
          correct: false,
        },
        {
          text: "Buddhism",
          correct: false,
        },
      ],
    },
    {
      id: 115,
      question: "Which element is the main component of the Earth's core?",
      answers: [
        {
          text: "Iron",
          correct: true,
        },
        {
          text: "Gold",
          correct: false,
        },
        {
          text: "Copper",
          correct: false,
        },
        {
          text: "Silver",
          correct: false,
        },
      ],
    },
    {
      id: 116,
      question: "Who wrote the novel 'Brave New World'?",
      answers: [
        {
          text: "George Orwell",
          correct: false,
        },
        {
          text: "Aldous Huxley",
          correct: true,
        },
        {
          text: "Ray Bradbury",
          correct: false,
        },
        {
          text: "Margaret Atwood",
          correct: false,
        },
      ],
    },
    {
      id: 117,
      question: "In Herman Melville's 'Moby-Dick', what is the name of the ship's captain?",
      answers: [
        {
          text: "Ishmael",
          correct: false,
        },
        {
          text: "Queequeg",
          correct: false,
        },
        {
          text: "Starbuck",
          correct: false,
        },
        {
          text: "Ahab",
          correct: true,
        },
      ],
    },
    {
      id: 118,
      question: "Which of these movies did not win the Academy Award for Best Picture in the year it was released?",
      answers: [
        { text: "Forrest Gump (1994)", correct: false },
        { text: "Pulp Fiction (1994)", correct: true },
        { text: "The Silence of the Lambs (1991)", correct: false },
        { text: "The Godfather (1972)", correct: false },
      ]
    },
    {
      id: 119,
      question: "What is the highest-grossing film of all time (not adjusted for inflation)?",
      answers: [
        { text: "Avengers: Endgame (2019)", correct: false },
        { text: "Avatar (2009)", correct: true },
        { text: "Titanic (1997)", correct: false },
        { text: "Star Wars: The Force Awakens (2015)", correct: false },
      ]
    },
    {
      id: 120,
      question: "Who wrote and performed the song 'Hallelujah', which has been covered by numerous artists and appeared in various movies and TV shows?",
      answers: [
        { text: "Bob Dylan", correct: false },
        { text: "Johnny Cash", correct: false },
        { text: "Tom Waits", correct: false },
        { text: "Leonard Cohen", correct: true },
      ]
    },
    {
      id: 121,
      question: "Which state is home to the world's largest natural arch, Rainbow Bridge?",
      answers: [
        { text: "Utah", correct: true },
        { text: "Montana", correct: false },
        { text: "Nebraska", correct: false },
        { text: "Idaho", correct: false },
      ]
    },
    {
      id: 122,
      question: "Which African country was formerly known as Abyssinia?",
      answers: [
        { text: "Egypt", correct: false },
        { text: "Ethiopia", correct: true },
        { text: "Morocco", correct: false },
        { text: "Nigeria", correct: false },
      ]
    },
    {
      id: 123,
      question: "What is the capital of Latvia?",
      answers: [
        { text: "Vilnius", correct: false },
        { text: "Tallinn", correct: false },
        { text: "Riga", correct: true },
        { text: "Helsinki", correct: false },
      ]
    },
    {
      id: 124,
      question: "What is the smallest bone in the human body?",
      answers: [
        { text: "Stapes", correct: true },
        { text: "Femur", correct: false },
        { text: "Radius", correct: false },
        { text: "Tibia", correct: false },
      ]
    },
    {
      id: 125,
      question: "What is the name of the river that flows through Baghdad?",
      answers: [
        { text: "Euphrates", correct: false },
        { text: "Nile", correct: false },
        { text: "Tigris", correct: true },
        { text: "Danube", correct: false },
      ]
    },
    {
      id: 126,
      question: "What is the largest bone in the human body?",
      answers: [
        { text: "Humerus", correct: false },
        { text: "Femur", correct: true },
        { text: "Fibula", correct: false },
        { text: "Tibia", correct: false },
      ]
    },
    {
      id: 127,
      question: "Who was the first female ruler of Egypt?",
      answers: [
        { text: "Cleopatra VII", correct: false },
        { text: "Nefertiti", correct: false },
        { text: "Hatshepsut", correct: true },
        { text: "Isis", correct: false },
      ]
    },
    {
      id: 128,
      question: "What was the name of the secret society that plotted the assassination of Archduke Franz Ferdinand, triggering the start of World War I?",
      answers: [
        { text: "The Black Hand", correct: true },
        { text: "The Red Guard", correct: false },
        { text: "The White Rose", correct: false },
        { text: "The Illuminati", correct: false },
      ]
    },
    {
      id: 129,
      question: "What was the name of the ship on which Charles Darwin traveled during his scientific expedition?",
      answers: [
        { text: "HMS Endeavour", correct: false },
        { text: "HMS Discovery", correct: false },
        { text: "HMS Bounty", correct: false },
        { text: "HMS Beagle", correct: true },
      ]
    },
    {
      id: 130,
      question: "Who was the last emperor of the Western Roman Empire?",
      answers: [
        { text: "Constantine the Great", correct: false },
        { text: "Julius Caesar", correct: false },
        { text: "Nero", correct: false },
        { text: "Romulus Augustus", correct: true },
      ]
    },
    {
      id: 131,
      question: "Which American president was responsible for the establishment of the Environmental Protection Agency (EPA)?",
      answers: [
        { text: "Richard Nixon", correct: true },
        { text: "Franklin D. Roosevelt", correct: false },
        { text: "Harry S. Truman", correct: false },
        { text: "Dwight D. Eisenhower", correct: false },
      ]
    },
    {
      id: 132,
      question: "What was the name of the Russian monk who became the adviser to Tsar Nicholas II and was eventually assassinated by the Bolsheviks in 1916?",
      answers: [
        { text: "Grigori Rasputin", correct: true },
        { text: "Ivan the Terrible", correct: false },
        { text: "Peter the Great", correct: false },
        { text: "Joseph Stalin", correct: false },
      ]
    },
    {
      id: 133,
      question: "What was the name of the French military leader who defeated the English at the Battle of Orleans in 1429?",
      answers: [
        { text: "Napoleon Bonaparte", correct: false },
        { text: "Louis XIV", correct: false },
        { text: "Charles de Gaulle", correct: false },
        { text: "Joan of Arc", correct: true },
      ]
    },
    {
      id: 134,
      question: "What was the name of the conflict between Athens and Sparta that lasted from 431-404 BCE?",
      answers: [
        { text: "Persian War", correct: false },
        { text: "Peloponnesian War", correct: true },
        { text: "Punic War", correct: false },
        { text: "Theban War", correct: false },
      ]
    },
    {
      id: 135,
      question: "Which ancient civilization is credited with inventing the first written language?",
      answers: [
        { text: "Egyptians", correct: false, },
        { text: "Chinese", correct: false, },
        { text: "Sumerians", correct: true, },
        { text: "Minoans", correct: false, },
      ]
    },
    {
      id: 136,
      question: "What is the most abundant gas in Earth's atmosphere?",
      answers: [
        {
          text: "Nitrogen",
          correct: true,
        },
        {
          text: "Oxygen",
          correct: false,
        },
        {
          text: "Carbon dioxide",
          correct: false,
        },
        {
          text: "Helium",
          correct: false,
        },
      ],
    },
    {
      id: 137,
      question: "What is the name of the brightest star in the night sky?",
      answers: [
        {
          text: "Sirius",
          correct: true,
        },
        {
          text: "Polaris",
          correct: false,
        },
        {
          text: "Betelgeuse",
          correct: false,
        },
        {
          text: "Vega",
          correct: false,
        },
      ],
    },
    {
      id: 138,
      question: "What is the largest volcano in the solar system?",
      answers: [
        {
          text: "Olympus Mons",
          correct: true,
        },
        {
          text: "Mauna Loa",
          correct: false,
        },
        {
          text: "Mount Everest",
          correct: false,
        },
        {
          text: "Krakatoa",
          correct: false,
        },
      ],
    },
    {
      id: 139,
      question: "Which film won the Best Picture Oscar in 2020?",
      answers: [
        {
          text: "Parasite",
          correct: false,
        },
        {
          text: "1917",
          correct: false,
        },
        {
          text: "Joker",
          correct: false,
        },
        {
          text: "Nomadland",
          correct: true,
        },
      ],
    },
    {
      id: 140,
      question: "Which battle ended the Napoleonic Wars?",
      answers: [
        {
          text: "Battle of Waterloo",
          correct: true,
        },
        {
          text: "Battle of Trafalgar",
          correct: false,
        },
        {
          text: "Battle of Borodino",
          correct: false,
        },
        {
          text: "Battle of Austerlitz",
          correct: false,
        },
      ],
    },
    {
      id: 141,
      question: "Who was the first female prime minister of a European country?",
      answers: [
        {
          text: "Angela Merkel",
          correct: false,
        },
        {
          text: "Indira Gandhi",
          correct: false,
        },
        {
          text: "Golda Meir",
          correct: false,
        },
        {
          text: "Margaret Thatcher",
          correct: true,
        },
      ],
    },
    {
      id: 142,
      question: "Which European country was the first to abolish the death penalty?",
      answers: [
        {
          text: "Netherlands",
          correct: true,
        },
        {
          text: "France",
          correct: false,
        },
        {
          text: "Germany",
          correct: false,
        },
        {
          text: "United Kingdom",
          correct: false,
        },
      ],
    },
    {
      id: 143,
      question: "Which European monarch was known as the 'Sun King'?",
      answers: [
        {
          text: "Charles V",
          correct: false,
        },
        {
          text: "Henry VIII",
          correct: false,
        },
        {
          text: "Louis XIV",
          correct: true,
        },
        {
          text: "Philip II",
          correct: false,
        },
      ],
    },
    {
      id: 144,
      question: "What is the term for a word that is derived from the name of a person or place?",
      answers: [
        {
          text: "Eponym",
          correct: true,
        },
        {
          text: "Antonym",
          correct: false,
        },
        {
          text: "Homophone",
          correct: false,
        },
        {
          text: "Homonym",
          correct: false,
        },
      ],
    },
    {
      id: 145,
      question: "Which African country is the most populous?",
      answers: [
        {
          text: "Egypt",
          correct: false,
        },
        {
          text: "Ethiopia",
          correct: false,
        },
        {
          text: "South Africa",
          correct: false,
        },
        {
          text: "Nigeria",
          correct: true,
        },
      ],
    },
    {
      id: 146,
      question: "What is the name of the mountain range that separates Europe and Asia?",
      answers: [
        {
          text: "Himalaya Mountains",
          correct: false,
        },
        {
          text: "Ural Mountains",
          correct: true,
        },
        {
          text: "Andes Mountains",
          correct: false,
        },
        {
          text: "Rocky Mountains",
          correct: false,
        },
      ],
    },
    {
      id: 147,
      question: "What is the name of the strait that separates Asia and North America?",
      answers: [
        {
          text: "Gibraltar Strait",
          correct: false,
        },
        {
          text: "Magellan Strait",
          correct: false,
        },
        {
          text: "Hormuz Strait",
          correct: false,
        },
        {
          text: "Bering Strait",
          correct: true,
        },
      ],
    },
    {
      id: 148,
      question: "Which African country is the largest by land area?",
      answers: [
        {
          text: "Sudan",
          correct: false,
        },
        {
          text: "Libya",
          correct: false,
        },
        {
          text: "Democratic Republic of Congo",
          correct: false,
        },
        {
          text: "Algeria",
          correct: true,
        },
      ],
    },
    {
      id: 149,
      question: "What is the name of the longest river in Europe?",
      answers: [
        {
          text: "Volga River",
          correct: true,
        },
        {
          text: "Danube River",
          correct: false,
        },
        {
          text: "Dnieper River",
          correct: false,
        },
        {
          text: "Rhine River",
          correct: false,
        },
      ],
    },
    {
      id: 150,
      question: "What is the name of the mountain range that runs through the eastern United States?",
      answers: [
        {
          text: "Rocky Mountains",
          correct: false,
        },
        {
          text: "Appalachian Mountains",
          correct: true,
        },
        {
          text: "Sierra Nevada Mountains",
          correct: false,
        },
        {
          text: "Cascade Range",
          correct: false,
        },
      ],
    },
    {
      id: 151,
      question: "What is the name of the largest glacier outside of the polar regions?",
      answers: [
        {
          text: "Vatnajökull",
          correct: false,
        },
        {
          text: "Himalayan Glacier",
          correct: false,
        },
        {
          text: "Fedchenko Glacier",
          correct: true,
        },
        {
          text: "Siachen Glacier",
          correct: false,
        },
      ],
    },
    {
      id: 152,
      question: "Which book holds the world record for being the most stolen from public libraries?",
      answers: [
        {
          text: "The Bible",
          correct: false,
        },
        {
          text: "The Catcher in the Rye",
          correct: false,
        },
        {
          text: "To Kill a Mockingbird",
          correct: false,
        },
        {
          text: "Guinness World Records",
          correct: true,
        },
      ],
    },
    {
      id: 153,
      question: "What is the name of the largest flower in the world?",
      answers: [
        {
          text: "Corpse flower",
          correct: false,
        },
        {
          text: "Rafflesia",
          correct: true,
        },
        {
          text: "Titan arum",
          correct: false,
        },
        {
          text: "Lily of the valley",
          correct: false,
        },
      ],
    },
    {
      id: 154,
      question: "Which element on the periodic table has the highest melting point?",
      answers: [
        {
          text: "Tungsten",
          correct: true,
        },
        {
          text: "Carbon",
          correct: false,
        },
        {
          text: "Titanium",
          correct: false,
        },
        {
          text: "Platinum",
          correct: false,
        },
      ],
    },
    {
      id: 155,
      question: "What is the name of the only bird that can fly backwards?",
      answers: [
        {
          text: "Ostrich",
          correct: false,
        },
        {
          text: "Penguin",
          correct: false,
        },
        {
          text: "Emu",
          correct: false,
        },
        {
          text: "Hummingbird",
          correct: true,
        },
      ],
    },
    {
      id: 156,
      question: "What is the name of the tallest building in the world?",
      answers: [
        {
          text: "Burj Khalifa",
          correct: true,
        },
        {
          text: "Shanghai Tower",
          correct: false,
        },
        {
          text: "Abraj Al Bait Clock Tower",
          correct: false,
        },
        {
          text: "One World Trade Center",
          correct: false,
        },
      ],
    },
    {
      id: 157,
      question: "What is the name of the instrument used to measure wind speed ?",
      answers: [
        {
          text: "Barometer",
          correct: false,
        },
        {
          text: "Anemometer",
          correct: true,
        },
        {
          text: "Hygrometer",
          correct: false,
        },
        {
          text: "Thermometer",
          correct: false,
        },
      ],
    },
    {
      id: 158,
      question: "What is the name of the largest species of kangaroo?",
      answers: [
        {
          text: "Eastern Grey Kangaroo",
          correct: false,
        },
        {
          text: "Red Kangaroo",
          correct: true,
        },
        {
          text: "Western Grey Kangaroo",
          correct: false,
        },
        {
          text: "Antilopine Kangaroo",
          correct: false,
        },
      ],
    },
    {
      id: 159,
      question: "What is the name of the currency used in Thailand?",
      answers: [
        {
          text: "Rupee",
          correct: false,
        },
        {
          text: "Yen",
          correct: false,
        },
        {
          text: "Dollar",
          correct: false,
        },
        {
          text: "Baht",
          correct: true,
        },
      ],
    },
    {
      id: 160,
      question: "What is the name of the active volcano in Italy that destroyed the ancient Roman city of Pompeii?",
      answers: [
        {
          text: "Mount Etna",
          correct: false,
        },
        {
          text: "Mount Vesuvius",
          correct: true,
        },
        {
          text: "Mount Stromboli",
          correct: false,
        },
        {
          text: "Mount Pinatubo",
          correct: false,
        },
      ],
    },
    {
      id: 161,
      question: "What famous document begins with the words 'When in the course of human events'?",
      answers: [
        {
          text: "The Magna Carta",
          correct: false,
        },
        {
          text: "The Bill of Rights",
          correct: false,
        },
        {
          text: "The Declaration of Independence",
          correct: true,
        },
        {
          text: "The Emancipation Proclamation",
          correct: false,
        },
      ],
    },
    {
      id: 162,
      question: "What ancient civilization built Machu Picchu?",
      answers: [
        {
          text: "Aztec",
          correct: false,
        },
        {
          text: "Inca",
          correct: true,
        },
        {
          text: "Maya",
          correct: false,
        },
        {
          text: "Egyptian",
          correct: false,
        },
      ],
    },
    {
      id: 163,
      question: "Who was the last emperor of Russia?",
      answers: [
        {
          text: "Nicholas II",
          correct: true,
        },
        {
          text: "Alexander III",
          correct: false,
        },
        {
          text: "Peter the Great",
          correct: false,
        },
        {
          text: "Ivan the Terrible",
          correct: false,
        },
      ],
    },
    {
      id: 164,
      question: "What is the name of the chemical process by which cells convert glucose into ATP?",
      answers: [
        {
          text: "Photosynthesis",
          correct: false,
        },
        {
          text: "Glycolysis",
          correct: false,
        },
        {
          text: "Fermentation",
          correct: false,
        },
        {
          text: "Cellular respiration",
          correct: true,
        },
      ],
    },
    {
      id: 165,
      question: "What is the name of the organelle responsible for the synthesis and modification of lipids and proteins in eukaryotic cells?",
      answers: [
        {
          text: "Endoplasmic reticulum",
          correct: true,
        },
        {
          text: "Golgi apparatus",
          correct: false,
        },
        {
          text: "Mitochondria",
          correct: false,
        },
        {
          text: "Lysosome",
          correct: false,
        },
      ],
    },
    {
      id: 166,
      question: "What is the name of the process by which a cell engulfs a large particle by forming a membrane-bound vesicle around it?",
      answers: [
        {
          text: "Exocytosis",
          correct: false,
        },
        {
          text: "Pinocytosis",
          correct: false,
        },
        {
          text: "Endocytosis",
          correct: true,
        },
        {
          text: "Phagocytosis",
          correct: false,
        },
      ],
    },
    {
      id: 167,
      question: "What is the term used to describe a substance that speeds up a chemical reaction without being consumed in the reaction?",
      answers: [
        {
          text: "Reactant",
          correct: false,
        },
        {
          text: "Product",
          correct: false,
        },
        {
          text: "Inhibitor",
          correct: false,
        },
        {
          text: "Catalyst",
          correct: true,
        },
      ],
    },
    {
      id: 168,
      question: "What was the name of the 16th century religious reformer who founded the Church of England?",
      answers: [
        {
          text: "Martin Luther",
          correct: false,
        },
        {
          text: "Henry VIII",
          correct: true,
        },
        {
          text: "John Calvin",
          correct: false,
        },
        {
          text: "John Wesley",
          correct: false,
        },
      ],
    },
    {
      id: 169,
      question: "What was the name of the 18th century Enlightenment philosopher who wrote the famous work 'The Social Contract'?",
      answers: [
        {
          text: "Jean-Jacques Rousseau",
          correct: true,
        },
        {
          text: "Thomas Hobbes",
          correct: false,
        },
        {
          text: "John Locke",
          correct: false,
        },
        {
          text: "Baron de Montesquieu",
          correct: false,
        },
      ],
    },
    {
      id: 170,
      question: "What was the name of the first successful English colony in the Americas, established in 1607?",
      answers: [
        {
          text: "Plymouth",
          correct: false,
        },
        {
          text: "Roanoke",
          correct: false,
        },
        {
          text: "Massachusetts Bay",
          correct: false,
        },
        {
          text: "Jamestown",
          correct: true,
        },
      ],
    },
    {
      id: 171,
      question: "In what year did the French Revolution begin?",
      answers: [
        {
          text: "1756",
          correct: false,
        },
        {
          text: "1776",
          correct: false,
        },
        {
          text: "1789",
          correct: true,
        },
        {
          text: "1792",
          correct: false,
        },
      ]
    },
    {
      id: 172,
      question: "Which war between France and England began in 1756 and had major battles fought on four different continents?",
      answers: [
        {
          text: "Seven Years' War",
          correct: true,
        },
        {
          text: "Hundred Years' War",
          correct: false,
        },
        {
          text: "Napoleonic Wars",
          correct: false,
        },
        {
          text: "American Revolutionary War",
          correct: false,
        },
      ],
    },
    {
      id: 173,
      question: "When was personal income tax first introduced in America?",
      answers: [
        {
          text: "1854",
          correct: false,
        },
        {
          text: "1901",
          correct: false,
        },
        {
          text: "1876",
          correct: false,
        },
        {
          text: "1861",
          correct: true,
        },
      ],
    },
    {
      id: 174,
      question: "What was the name of the dynasty that ruled ancient Egypt during the period known as the New Kingdom, from about 1550 BCE to 1070 BCE?",
      answers: [
        {
          text: "Eighteenth Dynasty",
          correct: true,
        },
        {
          text: "Twelfth Dynasty",
          correct: false,
        },
        {
          text: "Twenty-sixth Dynasty",
          correct: false,
        },
        {
          text: "Ptolemaic Dynasty",
          correct: false,
        },
      ],
    },
    {
      id: 175,
      question: "Who founded the Achaemenid Empire?",
      answers: [
        {
          text: "Alexander the Great",
          correct: false,
        },
        {
          text: "Darius the Great",
          correct: false,
        },
        {
          text: "Cyrus the Great",
          correct: true,
        },
        {
          text: "Xerxes the Great",
          correct: false,
        },
      ],
    },
    {
      id: 176,
      question: "Who was the first European explorer to reach India by sea in the late 15th century?",
      answers: [
        {
          "text": "Christopher Columbus",
          "correct": false
        },
        {
          "text": "Ferdinand Magellan",
          "correct": false
        },
        {
          "text": "Vasco da Gama",
          "correct": true
        },
        {
          "text": "Francisco Pizarro",
          "correct": false
        }
      ]
    },
    {
      id: 177,
      question: "What was the first animal to be sent into space?",
      answers: [
        {
          "text": "Dog",
          "correct": true
        },
        {
          "text": "Monkey",
          "correct": false
        },
        {
          "text": "Mouse",
          "correct": false
        },
        {
          "text": "Rabbit",
          "correct": false
        }
      ]
    },
    {
      id: 178,
      question: "Who composed the famous opera 'The Marriage of Figaro'?",
      answers: [
        {
          "text": "Ludwig van Beethoven",
          "correct": false
        },
        {
          "text": "Wolfgang Amadeus Mozart",
          "correct": true
        },
        {
          "text": "Giuseppe Verdi",
          "correct": false
        },
        {
          "text": "Richard Wagner",
          "correct": false
        }
      ]
    },
    {
      id: 179,
      question: "Who was the first female monarch of England?",
      answers: [
        {
          "text": "Mary I",
          "correct": true
        },
        {
          "text": "Elizabeth I",
          "correct": false
        },
        {
          "text": "Anne",
          "correct": false
        },
        {
          "text": "Victoria",
          "correct": false
        }
      ]
    },
    {
      id: 180,
      question: "Who was the leader of the Ottoman Empire during its conquest of Constantinople?",
      answers: [
        {
          "text": "Suleiman the Magnificent",
          "correct": false
        },
        {
          "text": "Mehmed II",
          "correct": true
        },
        {
          "text": "Selim I",
          "correct": false
        },
        {
          "text": "Murad II",
          "correct": false
        }
      ]
    },
    {
      id: 181,
      question: "Which two European countries fought in the War of the Roses?",
      answers: [
        {
          "text": "England and France",
          "correct": false
        },
        {
          "text": "England and Scotland",
          "correct": false
        },
        {
          "text": "Spain and Portugal",
          "correct": false
        },
        {
          "text": "York and Lancaster",
          "correct": true
        }
      ]
    },
    {
      id: 182,
      question: "Which emperor is famous for constructing the Forbidden City in Beijing, China?",
      answers: [
        {
          "text": "Emperor Kangxi",
          "correct": false
        },
        {
          "text": "Emperor Qianlong",
          "correct": false
        },
        {
          "text": "Emperor Yongle",
          "correct": true
        },
        {
          "text": "Emperor Hongwu",
          "correct": false
        }
      ]
    },
    {
      id: 183,
      question: "Which two countries fought in the Boer War?",
      answers: [
        {
          "text": "Britain and France",
          "correct": false
        },
        {
          "text": "Britain and Germany",
          "correct": false
        },
        {
          "text": "Britain and South African Republic",
          "correct": true
        },
        {
          "text": "Britain and Spain",
          "correct": false
        }
      ]
    },
    {
      id: 184,
      question: "Which Roman emperor famously declared himself to be a god?",
      answers: [
        {
          "text": "Julius Caesar",
          "correct": false
        },
        {
          "text": "Nero",
          "correct": true
        },
        {
          "text": "Augustus",
          "correct": false
        },
        {
          "text": "Trajan",
          "correct": false
        }
      ]
    },
    {
      id: 185,
      question: "What is the capital city of Kazakhstan?",
      answers: [
        {
          "text": "Almaty",
          "correct": false
        },
        {
          "text": "Astana",
          "correct": true
        },
        {
          "text": "Tashkent",
          "correct": false
        },
        {
          "text": "Bishkek",
          "correct": false
        }
      ]
    },
    
    {
      id: 186,
      question: "Who led the Haitian Revolution against France in the late 18th century?",
      answers: [
        {
          "text": "Toussaint L'Ouverture",
          "correct": true
        },
        {
          "text": "Simon Bolivar",
          "correct": false
        },
        {
          "text": "Emperor Haile Selassie",
          "correct": false
        },
        {
          "text": "Nelson Mandela",
          "correct": false
        }
      ]
    },
    {
      id: 187,
      question: "In the film 'No Country for Old Men,' what type of weapon does the antagonist, Anton Chigurh, use to kill his victims?",
      answers: [
        {
          "text": "A knife",
          "correct": false
        },
        {
          "text": "A shotgun",
          "correct": false
        },
        {
          "text": "A bolt pistol",
          "correct": true
        },
        {
          "text": "A crossbow",
          "correct": false
        }
      ]
    },
    {
      id: 188,
      question: "Who plays the lead role of Elliot Alderson in the TV series 'Mr. Robot'?",
      answers: [
        {
          "text": "Christian Slater",
          "correct": false
        },
        {
          "text": "Rami Malek",
          "correct": true
        },
        {
          "text": "B.D. Wong",
          "correct": false
        },
        {
          "text": "Michael Cristofer",
          "correct": false
        }
      ]
    },
    {
      id: 189,
      question: "Who directed the 1979 science fiction horror film 'Alien'?",
      answers: [
        {
          "text": "Ridley Scott",
          "correct": true
        },
        {
          "text": "Steven Spielberg",
          "correct": false
        },
        {
          "text": "James Cameron",
          "correct": false
        },
        {
          "text": "George Lucas",
          "correct": false
        }
      ]
    },
    {
      id: 190,
      question: "When was the website 'Myspace' founded?",
      answers: [
        {
          "text": "2000",
          "correct": false
        },
        {
          "text": "2003",
          "correct": true
        },
        {
          "text": "2006",
          "correct": false
        },
        {
          "text": "2009",
          "correct": false
        }
      ]
    },
    {
      id: 191,
      question: "What is the largest lake in Africa by volume?",
      answers: [
        {
          "text": "Lake Victoria",
          "correct": true
        },
        {
          "text": "Lake Tanganyika",
          "correct": false
        },
        {
          "text": "Lake Malawi",
          "correct": false
        },
        {
          "text": "Lake Chad",
          "correct": false
        }
      ]
    },
    {
      id: 192,
      question: "Which island in the Caribbean Sea is divided between two countries, France and the Netherlands?",
      answers: [
        {
          "text": "Barbados",
          "correct": false
        },
        {
          "text": "Jamaica",
          "correct": false
        },
        {
          "text": "Saint Lucia",
          "correct": false
        },
        {
          "text": "Saint Martin",
          "correct": true
        }
      ]
    },
    {
      id: 193,
      question: "What was the title of Michael Jackson's best-selling album of the 1980s?",
      answers: [
        {
        "text": "Bad",
        "correct": false
        },
        {
        "text": "Thriller",
        "correct": true
        },
        {
        "text": "Off the Wall",
        "correct": false
        },
        {
        "text": "Dangerous",
        "correct": false
        }
      ]
    },
    {
      id: 194,
      question: "Which 80s band released the album 'Purple Rain'?",
      answers: [
        {
        "text": "The Police",
        "correct": false
        },
        {
        "text": "Wham!",
        "correct": false
        },
        {
        "text": "Prince and the Revolution",
        "correct": true
        },
        {
        "text": "Duran Duran",
        "correct": false
        }
      ]
    },
    {
      id: 195,
      question: "What was the name of the Byzantine emperor who codified Roman law?",
      answers: [
        {
          "text": "Justinian I",
          "correct": true
        },
        {
          "text": "Heraclius",
          "correct": false
        },
        {
          "text": "Constantine XI",
          "correct": false
        },
        {
          "text": "Basil II",
          "correct": false
        }
      ]
    },
    {
      id: 196,
      question: "What is the name of the oldest university in the English-speaking world?",
      answers: [
        {
          "text": "University of Cambridge",
          "correct": false
        },
        {
          "text": "University of Oxford",
          "correct": true
        },
        {
          "text": "Harvard University",
          "correct": false
        },
        {
          "text": "Yale University",
          "correct": false
        }
      ]
    },
    {
      id: 197,
      question: "What is the name of the disease caused by the bacterium Yersinia pestis?",
      answers: [
        {
          "text": "Leprosy",
          "correct": false
        },
        {
          "text": "Plague",
          "correct": true
        },
        {
          "text": "Tuberculosis",
          "correct": false
        },
        {
          "text": "Cholera",
          "correct": false
        }
      ]
    },
    {
      id: 198,
      question: "What is the name of the type of Japanese noodles made from buckwheat flour?",
      answers: [
        {
          "text": "Soba",
          "correct": true
        },
        {
          "text": "Udon",
          "correct": false
        },
        {
          "text": "Ramen",
          "correct": false
        },
        {
          "text": "Somen",
          "correct": false
        }
      ]
    },
    {
      id: 199,
      question: "What is the main ingredient in a traditional paella recipe?",
      answers: [
        {
          "text": "Rice",
          "correct": true
        },
        {
          "text": "Pasta",
          "correct": false
        },
        {
          "text": "Couscous",
          "correct": false
        },
        {
          "text": "Quinoa",
          "correct": false
        }
      ]
    },
    {
      id: 200,
      question: "What type of food is paneer?",
      answers: [
        {
          "text": "Cheese",
          "correct": true
        },
        {
          "text": "Bread",
          "correct": false
        },
        {
          "text": "Meat",
          "correct": false
        },
        {
          "text": "Vegetable",
          "correct": false
        }
      ]
    },
  ], []);

  useEffect(() => {

    function generateUniqueRandomNumbers() {
      const result = new Set();
      
      // generate first 5 unique numbers 
      while (result.size < 5) {
        result.add(Math.floor(Math.random() * 66));
      }
      
      // generate next 5 unique numbers 
      while (result.size < 10) {
        result.add(Math.floor(Math.random() * 66) + 67);
      }
      
      // generate last 5 unique numbers
      while (result.size < 15) {
        result.add(Math.floor(Math.random() * 66) + 133);
      }
      
      return Array.from(result); // creates array from set
    }

    setQuestionNumber(generateUniqueRandomNumbers()); 

  }, [])

  const [questionNumber, setQuestionNumber] = useState([]);
  const [questionID, setQuestionID] = useState(1);
  const [lost, setLost] = useState(false);
  const [won, setWon] = useState(false);
  const [earned, setEarned] = useState("$0");
  const [start, setStart] = useState(true); //

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
    questionID > 1 && setEarned(moneyValues.find(each => each.id === questionID - 1).amount);
  }, [questionID]);
  
  return (
    <>
    <div className='app'>
      <div className='flex min-h-screen bg-darkblue text-white'>
        {/* Left Container */}
        <div className='main w-3/4 bg-[url("../set.jpg")] bg-cover flex flex-col'>
          {
          start ? //check start condition (this will be the default condition every time user visits page)
            <Start setStart={setStart} />
          :
          lost ? //check defeat condition
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
          won ?  // check victory condition
            <div className='h-72 m-auto mb-24 w-full bg-darkblue border-6 text-center text-4xl'>
              Congratulations! You Win $1000000!
            <br/>
            <button className='rounded-full border-8 border-white p-4 hover:bg-green-500 mt-12'
            onClick={() => window.location.reload()}>
              Try again?
            </button>
          </div>
          : //lost, won, start are all false, render trivia component
            (
            <>
              <div className='top h-1/2'></div>
              <div className='bottom h-1/2'>
                <Trivia
                  data={data}
                  questionNumber={questionNumber}
                  setWon={setWon}
                  setLost={setLost}
                  questionID={questionID}
                  setQuestionID={setQuestionID}
                />
              </div>
            </>
            )
          }
        </div>

        {/* Right Container */}
        <div className='w-1/4'>
          <ul className='p-5 mt-24'>

            {moneyValues.map((each) => //map each value in moneyValues and render to right side of page
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
