import { useState } from 'react';
import '../App.css'
import { NavBar } from "../components/NavBar";

export const Forms = () => {
  
    // function myFirstFunction( ) {
    //   let forms = document.getElementById('firstName');
    // //  let eMails = document.getElementById('email')
    // if (forms) {
    //   console.log('first-name:', forms.value)
      
    // } else {
    //   console.log("value not found");
      
    // }
    //  }
    // )
    //  const [count, setcount] = useState(0)
    //  const handleIncrement = () => {
    //   setcount(count + 1);
    //  }
    //  console.log(count);

    const [inputValue, setInputValue] =
    useState('');
    const handleInputChange = (evnt) => {
       setInputValue(evnt.target.value);
       let val = "UJU"
       if ([inputValue] === val) {
          console.log("logged in");
       } else {
        console.log("incorrect info");
       }
    }

     
     
    return(
        <>
            <div className="formsContainer">
              <NavBar/>
              <div className="formsSection">
                <form action="./Home" method="get">
                    <h2>User Information </h2>
                    <h4>first - name:{inputValue}</h4>
                    <input type="text" name="firstName" id="firstName" onChange={handleInputChange} placeholder="input name"/>
                    <input type="email" name="email" id="email" placeholder='input email' />
                    <input type="submit" value="log in"  />
                    <br/>
                    <input type="button" value={"click me"}/>

                </form>
              </div>
            </div>
        </>
    )
}

