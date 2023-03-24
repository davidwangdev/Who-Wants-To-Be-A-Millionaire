import {useState, useEffect} from 'react'








export default function Timer() {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  }, []);
  
  
  return (
    <>

    <div className='text-5xl'>
      {timer}
    </div>
    </>
  )
}
