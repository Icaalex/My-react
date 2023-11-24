import "../App.css"
import imgA from "../assets/image/home-decor-items-list.png"
import imgB from "../assets/image/paint-3 bg.png"
import imgC from "../assets/image/finecoat.png"
import imgD from "../assets/image/nicecoat2.png"
import imgE from "../assets/image/nicecoat3.png"
import imgF from "../assets/image/nicecoat2.png"
import imgG from "../assets/image/roller2.png"
import imgH from "../assets/image/roller1.png"
import imgI from "../assets/image/roller4.png"
import imgJ from "../assets/image/roller4.png"







export const PaintSection = () => {
    return(
        <div className="shopify-bg ">
            <div className="wrapperA d-flex row justify-space-between ">
            <div className="img-des-text">
                   we give you the best quality paints, cements, <span className = "desi">fillers and all other
                   building materials and distance is no barrier. Making your home look good is our specialty</span>
               </div>
               <div className="div">
                 <img src={imgA} alt="home decor" srcset="" />
               </div>
               
               
            </div>
            {/* <div className="flowDiv">
                 <img src={imgB} alt="" srcset="" />
            </div> */}
          <div className="wrapperB d-flex row flew-wrap">
            <div className="div">
                <img src={imgC} alt="" srcset="" />
            </div>
            <div className="des-nicecoat">
                <h3>Fine coat emulsion with great quality </h3> 
                <p>NGN ₦12,500 now NGN ₦10,700</p>
                <div className="cartSec buttonCS">
                     <a href="http://">Buy now</a> 
                </div>
            </div>
          </div>
          <div className="seeAll">
            <div className="seeText">
                More products
            </div>
            <div className="seePaints d-flex row flex-wrap">
                <div>
                 <img src={imgD} alt="" srcset="" />
                </div>

                <div>
                  <img src={imgE} alt="" srcset="" />
                </div>
                <div>
                  <img src={imgC} alt="" srcset="" />
                </div>
            </div>
            <div className="seeMore">
                see more >>>
            </div>
           
          </div>
          <div className="wrapperC d-flex row justify-space-between">
            <div className="div">
                <img src={imgI} alt="" srcset="" />
            </div>
            <div className="imggText">
               <h3>4" roller for just the perfect wall</h3> 
               <p>NGN ₦12,500 now NGN ₦10,700</p>
               <div className="cartSec buttonCS">
                   <a href="http://">Buy</a>  
                </div>
            </div>
          </div>
          <div className="seeAll">
            <div className="seeText">
                More products 
            </div>
            <div className="seeRollers d-flex row flex-wrap">
                <div>
                 <img src={imgH} alt="" srcset="" />
                </div>
                <div>
                  <img src={imgI} alt="" srcset="" />
                </div>
                <div>
                  <img src={imgG} alt="" srcset="" />
                </div>
            </div>
            <div className="seeMore">
                see more >>>
            </div>
           
          </div>
        </div>
    )
}

