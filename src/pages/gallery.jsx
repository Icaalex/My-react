import { useState } from "react";
import { Button } from "../components/Button"

export const Gallery = () => {

    const [email, setEmail] = useState("");

    let userName = "";
    const getUserName = (event) => {
        userName = event.target.value;
    }
    const handleClick = () => {
        console.log("you click button", email);
    }

    return  (
       <> 
       <div className="d-flex col">
            <form className="d-flex col" style={{minWidth: '500px' }}>
                <h2>Sign up</h2>
                <input type="text" placeholder="full name" onChange={getUserName} />
                <input type="email" name="email" id="email" onBlur={(event)=> {setEmail(event.target.value)}} />
                <input type="tel" id="phone"/>
                <Button btnTxt="Submit" clickFunction={handleClick} />
            </form>
        </div>
       </>
    )
}