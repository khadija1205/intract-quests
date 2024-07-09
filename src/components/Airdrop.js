import { useState } from 'react';
import {
    ArrowDown,
    Checkmark,
    Coin,
    AirdropImage,
    AirdropTask1,
    AirdropTask2,
    AirdropTask3,
    AirdropTask4,
} from '../assets/images';
import './Airdrop.css';

const airdropData = [
    {
        id: 1,
        title: '#1: What are airdrops, and how can they change your life?',
        tasks: 7,
        image: AirdropTask1
    },
    {
        id: 2,
        title: '#2: Types of airdrops',
        tasks: 10,
        image: AirdropTask2
    },
    {
        id: 3,
        title: '#3: How to earn huge $$$ from airdrops?',
        tasks: 11,
        image: AirdropTask3
    },
    {
        id: 4,
        title: '#4: Things to keep in mind!',
        tasks: 7,
        image: AirdropTask4
    }
];

const Airdrop = () => {
    const [openDropdown, setOpenDropdown] = useState(false);

    const onArrowClick = () => {
        setOpenDropdown(!openDropdown);
    };

    return (
        <div className="airdropContainer">
            <div className="intro">
                <div className="airdropImageContainer">
                    <img className="airdropImage" src={AirdropImage} alt="crypto_image" />
                    <div className="airdropQuests"> 4 Quests </div>
                </div>
                <div>
                    <p className="airdropTitle">Introduction to Airdrops</p>
                    <p className="airdropSubtitle">Your best bet to make it in crypto!</p>
                    <p className="airdropDivider" />
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
                    {airdropData.map((data) => {
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
        </div>
    );
};

export default Airdrop;
