import "../App.css"
import { Shopify } from './BmZion-shopify';
import React, { useState } from 'react';

export const ShopifyLogin = () => {
    const[email, setEmail] = useState("");
    const[pass, setPass] = useState("")
     
     const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email);
        console.log(pass);
     }
    return(
        <>
          <div className="loginShop ">
                <div className="masterShop d-flex row flex-wrap">
                    <div className="bgShop">
                            
                    </div>
                    <div className="loginDetails d-flex col">
                        <div className="boxLogin">
                         <div className="headLog d-flex row">
                            <h6>already members</h6>  
                            <a href="http://">Need help?</a>
                         </div>
                         <form action="" method="get" className=" d-flex col " >
                            <input value={email} onChange={(e) => setEmail(e.target.value)}  type="email" name="email" id="email" placeholder="youremail@gmail.com" required/><br/>
                            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" name="password" id="password" placeholder="input password" required /><br/>

                            <input type="submit" onClick={handleSubmit} value="sign in" className="loginBtn"/>
                         </form>
                         
                        </div>
                        <div className="noAccount">
                            Don't have an account yet?
                        </div>
                        <div className="creatAcct">
                            <a href="http://">
                                Create an account
                            </a>
                        </div>
                        
                    </div>
                </div>
          </div>
        
        </>
    )
}

<div className="zionLogo">
                    Zio<span className='logoSpan'>N Inve</span>stment <span className='dot'>.</span>
                </div>