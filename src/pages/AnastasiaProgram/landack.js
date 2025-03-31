import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import '../anastasia.css';
import '../../styles/global.css'

const LandAcknowledgement = () => {
    return (
        <main>
        <section className="ANTheader">
            <div>
                <h1 style = {{fontSize: '2.5rem'}}>
                    Land Acknowledgement
                </h1>
                <p style= {{textAlign: 'left', padding: '10px 0px'}}>
                Musical Theatre Repertory at the University of Southern California acknowledges our presence on the traditional and ancestral lands of
                the Gabrielino-Tongva people. We would like to pay our respects to those forcibly removed from their homelands and those who continue
                to experience the long-lasting effects of the colonization of indigenous people. We would like to acknowledge the Chumash, Tataviam,
                Serrano, Cahuilla, Juaneno, and Luiseno People for the land that USC occupies around Southern California. With humility, we
                recognize and respect all past and present indigenous peoples, their histories, and their ties to the land.
                </p>
            </div>
        </section>
    </main>
    );
};

export default LandAcknowledgement