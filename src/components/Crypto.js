import { useState } from 'react';
import {
    ArrowDown,
    Checkmark,
    Coin,
    CryptoImage,
    CryptoTask1,
    CryptoTask2,
    CryptoTask3,
    CryptoTask4,
    CryptoTask5,
    CryptoTask6
} from '../assets/images';
import './Crypto.css';

const cryptoBasicsData = [
    {
        id: 1,
        title: '#1: But what is crypto and web3?',
        tasks: 11,
        image: CryptoTask1
    },
    {
        id: 2,
        title: '#2: Setting up your own web3 wallet!',
        tasks: 8,
        image: CryptoTask2
    },
    {
        id: 3,
        title: '#3: What the heck is a blockchain?',
        tasks: 8,
        image: CryptoTask3
    },
    {
        id: 4,
        title: '#4: Swapping and bridging? What’s that?',
        tasks: 10,
        image: CryptoTask4
    },
    {
        id: 5,
        title: '#5: NFTs and why they’re cool ;)',
        tasks: 6,
        image: CryptoTask5
    },
    {
        id: 6,
        title: '#6: Doing quests and winning rewards!',
        tasks: 8,
        image: CryptoTask6
    }
];

const Crypto = () => {
    const [openDropdown, setOpenDropdown] = useState(false);

    const onArrowClick = () => {
        setOpenDropdown(!openDropdown);
    };

    return (
        <div className="cryptoContainer">
            <div className="basics">
                <div className="cryptoImageContainer">
                    <img className="cryptoImage" src={CryptoImage} alt="crypto_image" />
                    <div className="cryptoQuests"> 6 Quests </div>
                </div>
                <div>
                    <p className="cryptoTitle">Basics of Crypto</p>
                    <p className="cryptoSubtitle">The safest and easiest place to start your crypto journey!</p>
                    <p className="cryptoDivider" />
                    <div className="points">
                        <img className="coinImage" src={Coin} alt="coin_image" />
                        1490 XPs
                    </div>
                </div>
                <div className="arrowKey" onClick={onArrowClick}>
                    <img className={openDropdown && 'arrowInvertedImage'} src={ArrowDown} alt="arrow_down" />
                </div>
            </div>

            {openDropdown && (
                <div className="tasks">
                    {cryptoBasicsData.map((data) => {
                        return (
                            <div className="taskContainer">
                                <img className="taskImage" src={data.image} alt="crypto_task1" />
                                <div className="taskRight">
                                    <div className="taskTitle">{data.title}</div>
                                    <div className="taskDivider" />
                                    <div className="taskProgress">
                                        <div className="totalTasks">{data.tasks} Tasks</div>
                                        <div className="progressContainer">
                                            <div className="innerProgressContainer" />
                                        </div>
                                    </div>
                                </div>

                                <div className="checkMark">
                                    <img src={Checkmark} alt="checkmark" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
            <div class="dottedLine">
                <svg width="121" height="19" viewBox="0 0 121 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M120 7.80708C94.898 1.43658 35.7551 -5.51932 0 17.6211"
                        stroke="#A286F2"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-dasharray="8 8"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default Crypto;
