import {useState, useEffect} from 'react'








export default function Timer() {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    let timerId = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(timerId)
    }, 5000);
  }, []);
  
  
  return (
    <>
    <div className='text-5xl'>
      {timer}
    </div>
    </>
  )
}
