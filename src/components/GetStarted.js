import React from 'react';
import './GetStarted.css';
import { GetStartedBackground, GetStartedGif, Arrow } from '../assets/images';

const GetStarted = () => {
    return (
        <div className="container" style={{ backgroundImage: `url(${GetStartedBackground})` }}>
            <img className="getstartedgif" src={GetStartedGif} alt="gif" />
            <p>
                Intract users <span>have together made more than</span> $100 million
                <span> in web3.</span>
                <br />
                <span>Join them and </span>
                learn how to earn crypto!
            </p>

            <div className="getstarted-btn">
                Get Started <img className="arrow" src={Arrow} alt="Angle Top Icon"></img>
            </div>
        </div>
    );
};

export default GetStarted;
