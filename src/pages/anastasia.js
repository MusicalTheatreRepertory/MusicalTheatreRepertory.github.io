import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import './anastasia.css';
import '../styles/global.css'
import programcover from '../images/programcover.png';

const Anastasia = () => {
    return (
        <main>
        <section className="ANTheader">
            <div>
                <div className="landing-container">
                    <img
                        src= { programcover }
                        alt="Anastasia Program"
                    />
                </div>
                <br />
                <h3>
                    Anastasia: The Musical
                </h3>
                <h3>
                    Book by Terrance McNally
                </h3>
                <h3>
                    Music by Stephen Flaherty
                </h3>
                <h3>
                    Lyrics by Lynn Ahrens
                </h3>
                <h2>All video and/or audio recording of this production is strictly prohibited.</h2>
                <div className="button">
                <Link 
                    to="/AnastasiaProgram/landack"
                    className="button-details"
                >
                Land Acknowledgement
                </Link>
                </div>
                
                <div className="button">
                <Link 
                    to="/AnastasiaProgram/director"
                    className="button-details"
                >
                A Note From Our Director
                </Link>
                </div>
                <div className="button">
                <Link 
                    to="/index"
                    className="button-details"
                >
                A Note From The MTR President
                </Link>
                </div>


            <h1>Trigger Warnings</h1>
            <p>Please be advised: This production contains usage of prop guns, flashing lights, loud sounds, violence, and talk and visuals of death (including death of minors). </p>
            <br />
            <h1>The Team</h1>
            <div className="button">
                <Link 
                    to="/AnastasiaProgram/cast"
                    className="button-details"
                >
                Cast
                </Link>
            </div>

            <div className="button">
                <Link 
                    to="/AnastasiaProgram/creative"
                    className="button-details"
                >
                Creative Team
                </Link>
            </div>

            <div className="button">
                <Link 
                    to="/AnastasiaProgram/design"
                    className="button-details"
                >
                Design Team
                </Link>
            </div>
            

            <div className="button">
                <Link 
                    to="/AnastasiaProgram/pit"
                    className="button-details"
                >
                Band
                </Link>
            </div>

            <div className="button">
                <Link 
                    to="/index"
                    className="button-details"
                >
                Crew
                </Link>
            </div>

            <div className="button">
                <Link 
                    to="/AnastasiaProgram/board"
                    className="button-details"
                >
                MTR Board
                </Link>
            </div>
            <h1>Special Thanks</h1>
            <p>We want to give special thanks for helping us make this project a reality to SDA, Edgard De Dios, Sophia Pollacchi, Grace Sutherland, Melina Limantzakis, MaryAnn Hu, Trojan Stunt Group, and the Scene Dock Theatre. </p>
            <br />
            <h1>Donations</h1>
            <div className="button">
                <Link 
                    to="https://account.venmo.com/u/uscmtr"
                    className="button-details"
                >
                Venmo Donation
                </Link>
            </div>

            <div className="button">
                <Link 
                    to="https://fighton.donorengagepro.com/p/anastasia/c/Ignite-usc"
                    className="button-details"
                >
                IgniteSC
                </Link>
            </div>

            <h1>Social Links</h1>
            <div className="button">
                <Link 
                    to="https://linktr.ee/uscmtr?fbclid=PAZXh0bgNhZW0CMTEAAabuqHWDngRzQfRyiTo6Ql_iXGpVJwJ3QOQlwWM3CI2tevXKUPD8FLvlgdM_aem_IqflCVk_VrBrvqcc3zq9vA"
                    className="button-details"
                >
                MTR's LinkTree
                </Link>
            </div>

            <div className="button">
                <Link 
                    to="https://www.instagram.com/musicaltheatrerepertory/"
                    className="button-details"
                >
                MTR's Instagram
                </Link>
            </div>
            <br />

            <h3>"Anastasia" is presented through special arrangement with Concord Theatricals.
                All authorized materials are also supplied by Concord Theatricals.
            </h3>
            <h3 style ={{fontSize: "0.7rem", paddingBottom: "20px"}}>
                https://www.concordtheatricals.com
            </h3>
            </div>
        </section>
        </main>
    );
};

export default Anastasia;