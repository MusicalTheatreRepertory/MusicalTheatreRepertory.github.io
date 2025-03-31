import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import '../anastasia.css';
import '../../styles/global.css'

const Director = () => {
    return (
        <main>
        <section className="ANTheader">
            <div>
                <h1>
                    Director's Statement
                </h1>
                <p style= {{textAlign: 'left', padding: '10px 0px'}}>
                Anastasia is in honour of a country I have complicated ties to. Too often we allow the tragedy of turbulent nations to swallow their citizens. Instead of seeing people—perservering in all their loving, living glory—we see victims. Anastasia is committed to staying light and full of life despite the troubles of its setting. The characters laugh and dance and fall in love as much as they greive. There are birthday parties in war time. There are christenings and first dates and football games. Right now, my family who’ve fled Sudan are planning a wedding to be held in the country they’ve departed, despite having no idea when they will return. Sometimes, what you need most is something to look forward to. 
                </p>
                <p style= {{textAlign: 'left', padding: '10px 0px'}}>
                Anastasia is an ode to the forgotten weddings in war time. To being scared and alone and still trying to live. To the innate human need to hope.
                </p>
                <p style= {{textAlign: 'left', padding: '10px 0px'}}>
                    - Grayson Abdalla
                </p>
            </div>
        </section>
    </main>
    );
};

export default Director

