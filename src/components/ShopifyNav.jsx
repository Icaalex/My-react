import "../App.css"
import {Link} from 'react-router-dom'
import shadows from "../"

export const ShopifyNav = () => {
    return(
        <>
            <div className="navArea">
                <marquee behavior="we sell at affordable prices" direction="left">we sell at affordable prices...</marquee>
                <div className="mainNav d-flex row  justify-space-between">
                    <div className="zionLogo">
                        Zio<span className='logoSpan'>N Inve</span>stment <span className='dot'>.</span>
                    </div>
                    <ul className="navLists-shopify d-flex-2 row">
                        <li><a href="http://">Home</a></li>
                        <li><a href="http://">Paints</a></li>
                        <li><a href="https://">brushes</a></li>
                        <li><a href="http://">see all products</a></li>
                    </ul>
                    <div className="log-sign-shopify d-flex-2 row">
                    
                        <Link to = "/ShopifyLogin"><div className="buttonA"> log in </div></Link> 
                        <div className="buttonB"><a href="http://">sign up</a></div>
                    </div>
 
                </div>
           </div>
           <div className="descriptive d-flex row">
                <div className="desText"> get the best off all your building materials products on Zion investments</div>
                <div className="marketing">20% off of products when you buy more than a quantity of products on the website</div>
           </div>
        
        </>
    )
}
