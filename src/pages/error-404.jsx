import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Error404 = () => {

    const [count, setCounter] = useState(0);
    

    const animals = ["Goat", "dog", "cat", "mumu", "dumb", "lion"];

   const handleClick = () => {
     setCounter((count) => count + 1)
   }

   useEffect(() => {
    console.log("yes i ran");
   }
    , [count])
   


  return (
    <div>
        <ul>
            <li>Default</li>
            {
                animals.map((val, i) => {
                    return <li key={i}>{val}</li>
                } )
            }
        </ul>

        <h1>OOps!!! You are in a wrong hole. Please, go back.</h1>
        {/* <a href="home">Go back home</a> */}

        
        <Link to="/home">Go back home</Link>
        <div>
            count down : {count}

            <div>
                <button onClick={handleClick}>click me to increase the counter</button>
            </div>
        </div>
    </div>
  )
}

export default Error404
