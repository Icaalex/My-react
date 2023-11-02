import logo from "../logo.svg";
export const NavBar = () => {
    return(
        // company info starts here
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
                <li><a href="#">shop</a></li>
                <li><a href="#">about us</a></li>
                <li><a href="#">newsletters</a></li>
                <li><a href="#">contacts</a></li>
                <li><a href="#">blogs</a></li>
                <li><a href="#">profile</a></li>
            </ul>
        </div>
    )
}