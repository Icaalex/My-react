import "../App.css"
import imgX from "../assets/image/facebook.png"
import imgB from "../assets/image/paint-3 bg.png"



export const ShopifyFooter = () => {
    return(
        <>
            <div className="enders d-flex row flex-wrap">
                <div className="footerAA d-flex-2 col">
                    <div className="zionLogo">
                       Zio<span className='logoSpan'>N Inve</span>stment<span className='dot'>.co</span>
                    </div>
                    <h2>
                        Long lasting and quality products at affordable prices
                    </h2>
                    
                    <div className="socialHandles d-flex-2 row">
                        <a href="http://">
                            <div className="divA">
                               <img src={imgX} alt="" srcset="" />
                            </div>
                        </a>
                        
                        <div className="pHone">
                            <a href="http://">
                             <span>+2348035998537</span>

                            </a>
                        </div>
                    </div>
                    

                </div>

                <div className="footerBB d-flex-2 col">
                    <h2>
                       <a href="http://"> our branches</a>
                    </h2>
                    <p><a href="http://">All products</a></p>
                    <p><a href="http://">paints</a> </p>
                    <p> <a href="http://">cements</a> </p>
                    <p><a href="http://">rollers</a></p>
                    <p><a href="http://">welding materials</a></p>
                    <p><a href="http://">colour pallettes</a></p>
                </div>
                <div className="footerCC d-flex-2 col">
                    <h2>
                       <a href="http://">Help</a>
                    </h2>
                    <p><a href="http://">Return policy</a></p>
                    <p><a href="http://">shipping policy</a> </p>
                    <p> <a href="http://">products uses</a></p>
                    <p><a href="http://">FAQs about a product</a></p>
                    
                </div>
                <div className="footerDD d-flex-2 col">
                    <h2><a href="http://">reviews</a></h2>
                    <p><a href="http://">categories</a></p>
                </div>
                <div className="dft">
                   <img src={imgB} alt="dft" srcset="" />
                </div>
               
            </div>
        </>
        
    )
}