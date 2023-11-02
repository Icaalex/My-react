
import { NavBar } from './../components/NavBar';
import { Button } from './../components/Button';

export const HeroSection = () => {
    return(
        <div className="heroSection">
            {/* <div className="image"></div> */}
            <div className="caption d-flex col">
                <div className="c1">welcome to salvaltion chuurch</div>
                <div className="c2">perfect church for <br /> imperfect people</div>
                <div className="c3">far far away, behind the world montains, far from te 
                countries vocaliar and consonatia, there live the blind text. Separated they lived in.</div>
                <Button btnTxt="register now" />

            </div>
        </div>
    )
}

export const Home = () => {
    return(
        <div className="container">
           <NavBar/>
           <HeroSection />
        </div>
    )
}