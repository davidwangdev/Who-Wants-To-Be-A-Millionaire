import React, {useState} from 'react'
import { AiFillLinkedin } from 'react-icons/ai';
import {BsGithub, BsTelephone} from 'react-icons/bs';
import {CgMail} from 'react-icons/cg';

export default function Start({setStart}) {

  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);

  if(about) {
    return (
      <>
      <div className='h-1/2'></div>
      <div className='text-2xl bg-darkblue w-full items-center justify-center text-center space-y-6'>
      <div>
        "Who Wants To Be A Millionaire" was one of my favorite game shows as a child, 
        <br/>
        so naturally it occurred to me as a fun and exciting project to create.
      </div>

      <div>
        Currently, there are over 150 questions to choose from. 
      </div>
      <div>
        You will encounter more difficult questions as you progress. 
      </div>
      <div>
        I hope you will have as much fun playing the game as I did making it!
      </div>
      <div>
        Created with ReactJS, TailwindCSS, and Vite. 
      </div>
      <div>
        For more info about this project, please click <a href = "https://github.com/davidwangdev/Who-Wants-To-Be-A-Millionaire" 
      className='underline hover:bg-orange-500'>here</a> for the Github repository.
      </div>

      <button className='rounded-full border-4 p-4 hover:bg-sky-400' onClick={() => setAbout(false)}>
        Back to Home
      </button>

      </div>
      </>
    )
  }

  if(contact) {
    return (
      <>
      <div className='h-1/2'></div>
      <div className='text-4xl bg-darkblue w-full text-center space-y-3 '>
        <div className='mb-12'>
          I am currently looking for work!
          <br/>
          Please feel free to reach out at any of the links below:
        </div>
        <div>
          <a href = "#" className='hover:bg-orange-400'
          onClick = {() => {
            navigator.clipboard.writeText('davidwang20000@gmail.com')
            alert('Email copied to clipboard!')
          }}>
            <CgMail className='absolute ml-[8rem] mt-1'/>
            Email: davidwang20000@gmail.com (Click to copy)
          </a>
        </div>
        <div>
          <a href = "tel:[210-454-3264]" className='hover:bg-sky-400'>
            <BsTelephone className='absolute ml-[15rem] mt-1'/>
            Phone: (210) 454-3264 (Click to call)
          </a>
        </div>
        <div>
          <a href = "https://www.linkedin.com/in/david-w-79568257/" className='hover:bg-indigo-400 relative'>
            <AiFillLinkedin className='absolute ml-[26rem] mt-1'/>
            LinkedIn (Click) 
          </a>
        </div>
        <div>
          <a href = "https://github.com/davidwangdev" className='hover:bg-red-400'>
          <BsGithub className='absolute ml-[26rem] mt-1'/>
            GitHub (Click)
          </a>
        </div>
        <button className='rounded-full border-4 p-4 hover:bg-green-400' onClick={() => setContact(false)}>
          Back to Home
        </button>
      </div>
      </>
    )
  }

  return (
    <>
      <div className='h-2/3'></div>
      <div className='flex flex-col h-full items-center justify-around '>
        <div className='question text-3xl bg-questionColor w-11/12 border-2 text-center p-8 hover:bg-darkblue'>
          Welcome to "Who Wants To Be A Millionaire"!
        </div>
        <div className='answers flex flex-wrap w-5/6 justify-evenly'>
          <div className='answer' onClick={() => setStart(false)}>
            Start Game!
          </div>
          <div className='answer' onClick={() => setAbout(true)}>
            About
          </div>
          <div className='answer' onClick={() => setContact(true)}>
            Contact Me
          </div>
        </div>
      </div>
    </>
  )
}
