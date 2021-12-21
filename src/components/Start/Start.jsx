import React from "react";
import '../Start/start.css';
import Image1 from '../images/start1.PNG';
import Image2 from '../images/start2.PNG';
import { Link } from "react-router-dom";

function Start(){
    return(
        <>

        <div className="first-img">
            <img src={Image1} height="500px" width="90%"/>   
        </div>

        <section className="home-fact-area">
            <div className="container-lg">
                <div className="row">
                    <div className="col-md-4 d-flex">
                        <div className="home-fact-box mr-md-auto mr-auto">
                            <div className="text-box">
                            <i className="fas fa-atom float-left"> Mentoring</i></div>
                            <div className="text-box">
                                <h4> Get advice from academic professionals </h4>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="home-fact-box mr-md-auto mr-auto">
                        <div className="text-box">
                            <i className="fas fa-user-graduate float-left">  Explore</i></div>
                            <div className="text-box">
                                <h4>Explore through categories</h4>
                                <p>Find the best courses for you</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="home-fact-box mr-md-auto mr-auto">
                        <div className="text-box">
                            <i className="fas fa-award float-left"> Lorem</i></div>
                            <div className="text-box">
                                <h4>Lorem ipsum</h4>
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="second-img">
            <img src={Image2} height="auto" width="auto"/>
            <Link className="link" to="/search">
                <button type="submit" className="btn-start">Search</button>
            </Link>
        </div>

        </>
    )
}
export default Start;