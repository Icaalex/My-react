import logo from "../logo.svg";
import icon from "../assets/image/icons9.png";
// import { myFunction } from "../App";
// import { myFunction } from './../App';
export const NavBar = () => {
    // const elem = document.getElementById("responsive");

    //  function myFunction(){
    //      if (elem.style.display === "none") {
    //          elem.style.display = "block"
    //      } else {
    //          elem.style.display = "none"
    //      }

        
    //  }
    
    return(
        // company info starts here
        <>
            <div className="nav">
            <div className="navBarWrapper" >
            <div className="companyInfo">
                <div className="logo">
                    <img src={logo} alt="logo"  />
                </div>
                <div className="companyName">
                        react company
                </div>
            </div>

          {/* company info ends here */}
          {/* company nav links starts here */}
            <ul>
                <li><a href="#">home</a></li>
                <li><a href="gallery">gallery</a></li>
                <li><a href="#">about us</a></li>
                <li><a href="#">newsletters</a></li>
                <li><a href="#">contacts</a></li>
                <li><a href="#">blogs</a></li>
                <li><a href="#">profile</a></li>
            </ul>
            <div className="lg">
                <img src={icon} alt="icon" srcset="" />
            </div>
          </div>

          


         <div className="navBarWrapper-1" >
            <div className="d-flex-2 row">
              <div className="companyInfo">
                <div className="logo" >
                    <img src={logo} alt="logo"  />
                </div>
                <div className="companyName">
                        react company
                </div>
              </div>
            <div className="lg" >
                <img src={icon} alt="icon" srcset="" />
            </div>
            </div>
          
           <ul className="res" id="responsive">
                <li><a href="#">home</a></li>
                <li><a href="#">shop</a></li>
                <li><a href="#">about us</a></li>
                <li><a href="#">newsletters</a></li>
                <li><a href="#">contacts</a></li>
                <li><a href="#">blogs</a></li>
                <li><a href="#">profile</a></li>
            </ul>
            
           </div>
            </div>


      
        </>
       
    )
}