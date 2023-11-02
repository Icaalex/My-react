import { NavBar } from "../components/NavBar"

export const Gallery = () => {
    return  (
       <>
       <NavBar />
       <div className="heroSection d-flex">
            <div className="caption">
                <h1 style={{color: "#8f8f09", backgroundColor: "#231702"}}>
                    Welcome to my Gallery
                </h1>
            </div>
        </div>
       </>
    )
}