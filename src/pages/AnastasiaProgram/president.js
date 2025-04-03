import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import '../anastasia.css';
import '../../styles/global.css'

const President = () => {
    return (
        <main>
        <section className="ANTheader">
            <div>
                <h1>
                    President's Statement
                </h1>
                <p style= {{textAlign: 'left', padding: '10px 0px'}}>
                Hello, and welcome to MTR’s Spring 2025 production of  Anastasia! We are thrilled to have you join us in our first year at the Scene Dock Theatre. This production is the culmination of over 70 USC students' hard work over the past 5 months. From performers to designers to board members to musicians, many wonderful creatives have lent a hand to make this production come to life. At MTR our primary focus is giving fellow students a hands-on, physical application of the skills they are learning in class in a safe and fun environment. Everything you see and hear tonight was created completely by students! Providing these educational experiences, alongside many others, is MTR’s purpose, and it also takes resources. With changing policies surrounding grant opportunities and shifting performance spaces, it is an especially difficult time to afford the creation of student theater. All donations go directly into MTR’s next production, helping to pay for rights, design, and venue. We are so grateful for your support in keeping student theater alive and thriving. Enjoy the show!
                </p>
                <p style= {{textAlign: 'left', padding: '10px 0px'}}>
                    - Courtney Chu
                </p>
            </div>
        </section>
    </main>
    );
};

export default President