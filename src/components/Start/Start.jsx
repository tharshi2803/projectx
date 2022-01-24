import React from "react";
import '../Start/start.css';
import Image1 from '../images/start1.PNG';
import Image2 from '../images/start2.PNG';
import { Link } from "react-router-dom";

function Start(){
    return(
        <>

        <div className="first-img">
            <img src={Image1} height="auto" width="100%"/>   
        </div>

        <section className="home-fact-area">
            <div className="container-lg">
                <div className="row">
                    <div className="col-md-4 d-flex">
                        <div className="home-fact-box mr-md-auto mr-auto">
                            <div className="text-box">
                            <i className="fas fa-atom float-left"> Explore </i></div>
                            <div className="text-box">
                                <h5>Explore through categories</h5>
                                <p></p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="home-fact-box mr-md-auto mr-auto">
                        <div className="text-box">
                            <i className="fas fa-user-graduate float-left"> Choose</i></div>
                            <div className="text-box">
                                <h5>Choose best courses for you</h5>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="home-fact-box mr-md-auto mr-auto">
                        <div className="text-box">
                            <i className="fas fa-award float-left"> Achieve </i></div>
                            <div className="text-box">
                                <h5>Achieve your goals</h5>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="second-img">
            <img src={Image2} height="auto" width="100%" />
            <button type="submit" className="btn-start">
            <Link className="link" to="/search">
                Search
            </Link></button> 
        </div>

        </>
    )
}
export default Start;