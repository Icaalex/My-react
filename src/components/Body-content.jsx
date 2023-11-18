import "../App.css";
import pics from "../assets/image/church-building-icon.png";
import pix from "../assets/image/hands-2.png";
import picc from "../assets/image/hands-holding-heart.svg";
import imga from "../assets/image/side-img.png";
import j3Image from "../assets/image/person_2.jpg"
import { Secbutton } from "./Button";
import { Sec2button } from "../components/Button";
import imgsermon from "../assets/image/bg.png"
import { Sec3button } from "../components/Button";
import { Sec4button } from "../components/Button";
import { Sec5button } from "../components/Button";
import { Sec6button } from "../components/Button";
import imgb from "../assets/image/lights.jpg";
import imgc from "../assets/image/weather3.png";
import imgd from "../assets/image/car-7.png";
import imge from "../assets/image/tik-tok.png";
import imgf from "../assets/image/twitter.png";
// import imgg from "../assets/image/facebook";







export const BodyWrapper = ( ) => {
      

    return(
        <div className="body-content">
            <div className="wrapper-content-1 d-flex-2 row flex-wrap">
                <div className="cca d-flex-2 col justify-space-around ">
                    <div className="logo-content">
                        <img src={pics} alt="image"  />
                    </div>
                    <div className="ca"> Worship </div>
                    <div className="cb">What to expect</div>
                    <div className="cc">
                    Far far away, behind the word mountains, 
                    far from the <br/>countries Vokalia and<br/> Consonantia, there live the blind <br/> texts.
                    </div>
                </div>
                <div className="cca d-flex-2 col justify-space-around ">
                    <div className="logo-content">
                        <img src={pix} alt="image"  />
                    </div>
                    <div className="ca">Connect</div>
                    <div className="cb">
                        Contact Members 
                         
                    </div>
                    <div className="cc">
                      Far far away, behind the word mountains, 
                      far from the<br/> countries Vokalia and <br/> Consonantia, there live the blind <br/>texts.
                    </div>
                </div>
                <div className="cca d-flex-2 col justify-space-around">
                    <div className="logo-content">
                        <img src={picc} alt="image"  />
                    </div>
                    <div className="ca">God's love </div>
                    <div className="cb">Beliefs and History</div>
                    <div className="cc">
                    Far far away, behind the word mountains, 
                    far from the <br/>countries Vokalia and <br/>Consonantia, there live the blind <br/>texts.
                    </div>
                </div>
                <div className="cca cv d-flex-2 col justify-space-around">
                    <div className="c01">
                    A Christian Should Live For The Glory Of God And The Well-Being Of Others.
                    </div>
                    <div className="c02">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                    there live the blind texts.
                    </div>
                </div>
            </div>
            <div className="wrapper-content-2 d-flex row flex-wrap">
                <div className="img-section-wrapper">
                    
                   <img src={imga} alt="image" />
                         
                
                </div>
                <div className="text-section-wrapper d-flex-2 col">
                    <div className="d1">
                        welcome to salvation church
                    </div>
                    <div className="d2">
                        connect, grow and serve with us
                    </div>
                    <div className="d3">
                        <p className="d3-a">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country,
                        in which roasted parts of sentences fly into your mouth.
                        </p>
                        <div className="d3 b">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia. 
                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.



                        </div>
                    </div>
                    <Secbutton btnTxtt = {<a href="https://#">Learn more</a>}/>
                </div>
               

            </div>
            <div className="wrapper-3section d-flex row flex-wrap">
                <div className=" e1 d-flex col">
                WE'RE ON A MISSION TO <br/> HELP ALL YOUR PROBLEMS
                </div>
                <div className="E e-2 d-flex col">
                    <p className="e2">1,005,000</p>
                    <p>Members</p>
                </div>
                <div className="E e3 d-flex col">
                    <p className="e2">65,000</p>
                    <p>pastors</p>
                </div>
                <div className="E e4 d-flex col">
                    <p className="e2">500,000</p>
                    <p>donations</p>
                </div>
                <div className="E e5 d-flex col">
                    <p className="e2">50</p>
                    <p>churches</p>
                </div>
            </div>
            <div className="wrapper-4 d-flex col">
                <div className="our-sermon-sec">
                    our sermons
                </div>
                <div className="our-sermon2">
                    watch and listen to our<br/> sermons
                </div>
            </div>
            <div className="gene-ral d-flex row">
               <div className="wrapper-5 d-flex row flex-wrap">
                    <div className="img2-section">
                       <img src={imgsermon} alt="image"  />
                    </div>
                    <div className="text-wrap-5 d-flex col">
                       <div className="f1">
                          God wants to do a new thing in your life
                       </div>
                       <div className="f2">
                            <span style={{color:"#554", fontWeight:"700" }}>Speaker:</span> Dr. Rolando henderson
                        </div>
                        <div className="f3">
                           <span style={{color:"#554", fontWeight:"700" }}>categories:</span> God, pray, faith
                        </div>
                        <div className="f4">
                          on sunday 13 jan, 2019
                        </div>
                        <div className="f5">
                          A small river named Duden flows by their place and supplies 
                          it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Separated they live in Bookmarksgrove right at the coast of the Semantics, 
                          a large language ocean.
                        </div>
                        <div className="f6 d-flex row">
                           <Sec2button btnTxtt = {<a href="https://"> watch sermons</a>}/>
                           <Sec3button btnTxtt = {<a href="https://"> download sermons</a>} />

                        </div>
                    </div>
                </div>
                <div className="wrapper-2-5 d-flex row flex-wrap">
                    <div className="G g1">
                        <img src={imga} alt="image" srcset="" />
                    </div>
                    <div className="G g2">
                        <img src={imgsermon} alt="image"  />
                    </div>
                    <div className="G g3">
                        <img src={imga} alt="image" />
                    </div>
                    <div className="G g4">
                        <img src={imgsermon} alt="image" />
                    </div>
                    <div className="G g5">
                        <img src={imga} alt="image" />
                    </div>
                    <div className="G g6">
                        <img src={imgsermon} alt="image" />
                    </div>
                    <div className=" G g7">
                        <img src={imga} alt="image" />
                    </div>
                    <div className="G g4">
                        <img src={imgsermon} alt="image" />
                    </div>
                    <div className="G g5">
                        <img src={imga} alt="image" />
                    </div>
                </div>
            </div>
            <div className="wrapper-6 d-flex row flex-wrap">
                <div className="text-wrapper-6 d-flex-2 col">
                    <div className="h1">
                        God wants to do a new thing in your life
                    </div>
                    <p >
                        <span className="h2">speaker:</span>
                        Dr. rolando henderson
                    </p>
                    <p >
                        <span className="h2">categories:</span>
                        God, pray, faith
                    </p>
                    <div className="h3">
                        on sunday 13 jan, 2019
                    </div>
                    <div className="h4">
                       A small river named Duden flows by their place and supplies it with the necessary regelialia. 
                       It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Separated they live in Bookmarksgrove right at the coast of the Semantics, 
                       a large language ocean.
                    </div>
                    <div className="h5 d-flex-2 row flex-wrap">
                        <Sec4button btn3Txtt = {<a href="https://#">watch sermons</a>}/>
                        <Sec5button btn3Txtt = {<a href="https://#">download sermons</a>}/>

                    </div>

                </div>
                <div className="img-wrapper-6">
                    <img src={imgsermon} alt="image" />
                </div>
            </div>
            <div className="wrapper-7 d-flex row flex-wrap">
                <div className="img-wrapper-7">
                    <img src={imgsermon} alt="image" />
                </div>
                <div className="text-wrapper-7 d-flex-2 col">
                    <div className="h1">
                        God wants to do a new thing in your life
                    </div>
                    <p >
                        <span className="h2">speaker:</span>
                        Dr. rolando henderson
                    </p>
                    <p >
                        <span className="h2">categories:</span>
                        God, pray, faith
                    </p>
                    <div className="h3">
                        on sunday 13 jan, 2019
                    </div>
                    <div className="h4">
                       A small river named Duden flows by their place and supplies it with the necessary regelialia. 
                       It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Separated they live in Bookmarksgrove right at the coast of the Semantics, 
                       a large language ocean.
                    </div>
                    <div className="h5 d-flex-2 row flex-wrap">
                        <Sec4button btn3Txtt = {<a href="https://#">watch sermons</a>}/>
                        <Sec5button btn3Txtt = {<a href="https://#">download sermons</a>}/>

                    </div>

                </div>
            </div>
            <div className="wrapper-8 d-flex col">
                <div className="j1">
                    testimony
                </div>
                <div className="j2">
                    transform lives
                </div>
                <div className="j3 d-flex row flex-wrap">
                    <div className="j3-sec d-flex row flex-wrap">
                        <div className="j3-img">
                            <img src={j3Image} alt="image" />
                        </div>
                        <div className="j3-text d-flex-2 col">
                            <div className="j3t">
                                 
                              Far far away, behind the word mountains, 
                              far from the countries Vokalia and Consonantia, 
                              there live the blind texts.
                            </div>
                            <p>john doe</p>
                        </div>
                    </div>
                    <div className="j3-sec d-flex row flex-wrap">
                        <div className="j3-img">
                            <img src={j3Image} alt="image" />
                        </div>
                        <div className="j3-text d-flex-2 col">
                            <div className="j3t">
                                 Far far away, behind the word mountains, 
                                 far from the countries Vokalia and Consonantia, 
                                 there live the blind texts.
                            </div>
                            <p>michael fox</p>
                        </div>
                    </div>
                    <div className="j3-sec d-flex row flex-wrap">
                        <div className="j3-img">
                            <img src={j3Image} alt="image" />
                        </div>
                        <div className="j3-text d-flex-2 col">
                            <div className="j3t">
                                 Far far away, behind the word mountains, 
                                 far from the countries Vokalia and Consonantia, 
                                 there live the blind texts.
                            </div>
                            <p>mike shawn</p>
                        </div>
                    </div>
                    {/* <div className="j3-sec d-flex row flex-wrap">
                        <div className="j3-img">
                            <img src={j3Image} alt="image" />
                        </div>
                        <div className="j3-text d-flex-2 col">
                            <div className="j3t">
                                 Far far away, behind the word mountains, 
                                 far from the countries Vokalia and Consonantia, 
                                 there live the blind texts.
                            </div>
                            <p>mark smith</p>
                        </div>
                    </div>
                    <div className="j3-sec d-flex row flex-wrap">
                        <div className="j3-img">
                            <img src={j3Image} alt="image" />
                        </div>
                        <div className="j3-text d-flex-2 col">
                            <div className="j3t">
                                 Far far away, behind the word mountains, 
                                 far from the countries Vokalia and Consonantia, 
                                 there live the blind texts.
                            </div>
                            <p>kyle meyer</p>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="wrapper-9 d-flex col flex-wrap">
                <div className="k1 ">
                    our blog
                </div>
                <div className="k2">
                    latest news from our blog
                </div>
                <div className="k3 d-flex row flex-wrap">
                    <div className="k3-sec d-flex col ">
                        <div className="k3-img">
                            <img src={imgb} alt="" />
                        </div>
                        <div className="k3-text">
                            <div className="k3a">
                                july 20, 2020 admin
                            </div>
                            <div className="k3b">
                                building holy and healthy lives God's
                            </div>
                            <div className="k3c">
                                Far far away, behind the word mountains, 
                                far from the countries Vokalia and Consonantia
                            </div>
                            <Sec2button btnTxtt = {<a href="https://#">read more</a>}/>
                            
                        </div> 
                        <div className="k3-text-after">
                        
                        </div>
                    </div>
                    <div className="k3-sec">
                        <div className="k3-img">
                            <img src={imgc} alt="" />
                        </div>
                        <div className="k3-text">
                            <div className="k3a">
                                july 20, 2020 admin
                            </div>
                            <div className="k3b">
                                building holy and healthy lives God's
                            </div>
                            <div className="k3c">
                                Far far away, behind the word mountains, 
                                far from the countries Vokalia and Consonantia
                            </div>
                            <Sec2button btnTxtt = {<a href="https://#">read more</a>}/>
                        </div>
                        <div className="k3-text-after">
                        
                        </div>
                    </div>
                    <div className="k3-sec">
                        <div className="k3-img">
                            <img src={imgd} alt="" />
                        </div>
                        <div className="k3-text">
                            <div className="k3a">
                                july 20, 2020 admin
                            </div>
                            <div className="k3b">
                                building holy and healthy lives God's
                            </div>
                            <div className="k3c">
                                Far far away, behind the word mountains, 
                                far from the countries Vokalia and Consonantia
                            </div>
                            <Sec2button btnTxtt = {<a href="https://#">read more</a>}/>
                        </div>
                        <div className="k3-text-after">
                        
                        </div>
                    </div>
                </div>
                <div className="k4">
                    events
                </div>
                <div className="k5">
                    latest events
                </div>

            </div>
            <div className="wrapper-10 d-flex col">
                <div className="this-wrap d-flex row flex-wrap">
                    <div className="wrap-img">
                        <img src={imgb} alt="image" />
                    </div>
                    <div className="wrap-a d-flex-2 col">
                              <div className="wrap-des-1">
                                Giving Hope to Our Spiritual Needs
                              </div>
                              <div className="wrap-des-2">
                                <i className="fa fa-calender"></i> Monday, 8:00 Am - Tuesday, 8:00 Pm

                              </div>
                              <div className="wrap-des-3">
                                <i className="fa fa-route"></i> salvation church

                              </div>
                              <div className="wrap-des-2">
                                <i className="fa fa-calender"></i>  203 Fake St. Mountain View, San Francisco, California, USA
                              </div>
                              <Sec6button btn3Txttt = {<a href="https://#">more details</a>}/>

                    </div>
                </div>
                <div className="this-wrap d-flex row flex-wrap">
                    <div className="wrap-img">
                        <img src={imgb} alt="image" />
                    </div>
                    <div className="wrap-a d-flex-2 col">
                              <div className="wrap-des-1">
                                Giving Hope to Our Spiritual Needs
                              </div>
                              <div className="wrap-des-2">
                                <i className="fa fa-calender"></i> Monday, 8:00 Am - Tuesday, 8:00 Pm

                              </div>
                              <div className="wrap-des-3">
                                <i className="fa fa-route"></i> Monday, 8:00 Am - Tuesday, 8:00 Pm

                              </div>
                              <div className="wrap-des-2">
                                <i className="fa fa-calender"></i>  203 Fake St. Mountain View, San Francisco, California, USA
                              </div>
                              <Sec6button btn3Txttt = {<a href="https://#">more details</a>}/>

                    </div>
                </div>
                <div className="this-wrap d-flex row flex-wrap">
                    <div className="wrap-img">
                        <img src={imgb} alt="image" />
                    </div>
                    <div className="wrap-a d-flex-2 col">
                              <div className="wrap-des-1">
                                Giving Hope to Our Spiritual Needs
                              </div>
                              <div className="wrap-des-2">
                                <i className="fa fa-calender"></i> Monday, 8:00 Am - Tuesday, 8:00 Pm

                              </div>
                              <div className="wrap-des-3">
                                <i className="fa fa-route"></i> Monday, 8:00 Am - Tuesday, 8:00 Pm

                              </div>
                              <div className="wrap-des-2">
                                <i className="fa fa-calender"></i>  203 Fake St. Mountain View, San Francisco, California, USA
                              </div>
                              <Sec6button btn3Txttt = {<a href="https://#">more details</a>}/>

                    </div>
                </div>
                <div className="gall-sec d-flex col">
                    <div className="small-txt">
                        gallery
                    </div>
                    <div className="big-txt">
                        galleries
                    </div>
                </div>
            </div>
            <div className="wrapper-11">
                <div className="contents-images d-flex row flex-wrap">
                    <div className="conts-img">
                        <img src={imgd} alt="image" />
                    </div>
                    <div className="conts-img">
                        <img src={imgb} alt="image" />
                    </div>
                    <div className="conts-img">
                        <img src={imgd} alt="image" />
                    </div>
                    <div className="conts-img">
                        <img src={imgc} alt="image" />
                    </div>
                    <div className="conts-img">
                        <img src={imgd} alt="image" />
                    </div>
                    <div className="conts-img">
                        <img src={imgc} alt="image" />
                    </div>
                    <div className="conts-img">
                        <img src={imgd} alt="image" />
                    </div>
                    <div className="conts-img">
                        <img src={imgb} alt="image" />
                    </div>
                </div>

            </div>
            <div className="wrapper-12 d-flex col flex-wrap">
                <div className="footer-wrap-1 d-flex row flex-wrap">
                    <div className="footerA d-flex-2 col">
                       <div className="D-txt">
                         salvation
                       </div>
                        <div className="F-txt">
                          A small river named Duden flows by their place and supplies it with 
                          the necessary regelialia.
                        </div>
                        <div className="F-txt-2 d-flex-2 row">
                            <div className="footer-icons">
                                <img src={imge} alt="icon" />
                            </div>
                            <div className="footer-icons">
                                <img src={imgf} alt="icon" />
                            </div>
                            <div className="footer-icons">
                                <img src={imge} alt="icon" />
                            </div>
                        </div>
                    </div>
                    <div className="footerB d-flex-2 col">
                        <div className="D-txt">
                            latest news
                        </div>
                        <div className="footerB-row d-flex row">
                            <div className="lh-img">
                                <img src={imgc} alt="image" />
                            </div>
                            <div className="lh-text d-flex-2 col">
                                <div className="lh-a">
                                   Even the all-powerful Pointing has no control 
                                   about

                                </div>
                                <div className="lh-b">
                                  Aug. 10, 2020 Admin 19

                                </div>
                            </div>

                        </div>
                        <div className="footerB-row d-flex row">
                            <div className="lh-img">
                                <img src={imgb} alt="image" />
                            </div>
                            <div className="lh-text d-flex-2 col">
                                <div className="lh-a">
                                   Even the all-powerful Pointing has no control 
                                   about

                                </div>
                                <div className="lh-b">
                                  Aug. 10, 2020 Admin 19

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="footerC d-flex-2 col">
                       <div className="D-txt">
                          quick links
                       </div>
                       <div className="nav-ul-footer d-flex-2 col">
                            <div className="home">
                               <a href="http://#">home</a>
                            </div>
                            <div className="home">
                               <a href="http://#">about</a>
                            </div>
                            <div className="home">
                               <a href="http://#">sermons</a>
                            </div>
                            <div className="home">
                               <a href="http://#">events</a>
                            </div>
                            <div className="home">
                               <a href="http://#">blog</a>
                            </div>
                            <div className="home">
                               <a href="http://#">contact</a>
                            </div>
                       </div>
                    </div>
                    <div className="footerD d-flex-2 col">
                        <div className="D-txt">
                            have a question?
                        </div>
                        <div className="footerD-row d-flex col">
                            <div className="roww1 d-flex-2 row">
                                <div className="roww-img">
                                    <img src = {imge} alt="image" />
                                </div>
                                <div className="roww-text">
                                   203 Fake St. Mountain View, San Francisco, California, USA
                                </div>
                            </div>
                            <div className="roww1 d-flex-2 row">
                                <div className="roww-img">
                                    <img src = {imgf} alt="image" />
                                </div>
                                <div className="roww-text">
                                  <a href="http://#">+2 392 3929 210 </a>                               
                                </div>
                            </div>
                            <div className="roww1 d-flex-2 row">
                                <div className="roww-img">
                                    <img src = {imge} alt="image" />
                                </div>
                                <div className="roww-text">
                                  <a href="http://#">	info@yourdomain.com</a> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-wrap-2">
                  Copyright ©2023 All rights reserved | This template is made with <span> by Colorlib.com</span>
                </div>
            </div>


            

           
        </div>
    )
}