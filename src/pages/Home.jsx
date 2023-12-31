
import { NavBar } from '../components/NavBar';
import { Button } from '../components/Button';
import { BodyWrapper } from '../components/Body-content';
import { Gallery } from './gallery';

export const HeroSection = () => {
    return(
        <div className="heroSection d-flex">
            {/* <div className="image"></div> */}
            <div className="caption d-flex col">
                <div className="c1">welcome to salvation chuurch</div>
                <div className="c2">perfect church for imperfect people</div>
                <div className="c3">far far away, behind the world montains, far from te 
                countries vocaliar and consonantia, there live the blind text. Separated they lived in.</div>
                <Button btnTxt={<a href="https://payslate.com.ng">Register now</a>} />

            </div>
        </div>
    )
}

export const Home = () => {
    return(
        <div className="container">
           <NavBar/>
           <HeroSection />
           <BodyWrapper/>
        </div>
    )
}









