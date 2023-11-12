import { NavBar } from "../components/NavBar"
import { Button } from "../components/Button"
import { BodyWrapper } from "../components/Body-content";

export const Gallery = () => {
    return  (
       <>
       
       <div className="heroSection d-flex">
            <NavBar />
            <div className="caption">
                <h1 style={{color: "#8f8f09", backgroundColor: "#231702"}}>
                    Welcome to my Gallery
                </h1>
            </div>
        </div>
        < BodyWrapper />
       </>
    )
}