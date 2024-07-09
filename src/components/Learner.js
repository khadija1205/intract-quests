import { Checkmark, LockIcon, Path, Path2, Step2 } from '../assets/images';
import './Learner.css';

const Learner = () => {
    return (
        <div className="step2Container">
            <img className="path1" src={Path} alt="path1" />
            <div className="learnerBlock">
                <div className="learnerCheckmark">
                    <img className="learnerCheckmarkIcon" src={Checkmark} alt="learner_checkmark" />
                </div>
                <div>
                    <div className="learnerContainer">
                        <img className="learnerImage" src={Step2} alt="learner_img" />
                    </div>
                    <div className="lockContainer">
                        <img src={LockIcon} alt="lock_icon" />
                    </div>
                </div>
                <div className="learnerTitle">Interact Certified: Learner NFT</div>
                <div className="learnerSubtitle">Your crypto black-belt certificate</div>
                <div className="claimButton">Claim</div>
            </div>
            <img className="path2" src={Path2} alt="path2" />
        </div>
    );
};

export default Learner;
