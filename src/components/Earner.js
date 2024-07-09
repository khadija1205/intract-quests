import { Checkmark, LockIcon, Path3, Path4, Step3 } from '../assets/images';
import './Earner.css';

const Earner = () => {
    return (
        <div className="step3Container">
            <img className="path3" src={Path3} alt="path3" />
            <div className="earnerBlock">
                <div className="earnerCheckmark">
                    <img className="earnerCheckmarkIcon" src={Checkmark} alt="learner_checkmark" />
                </div>
                <div>
                    <div className="earnerContainer">
                        <img className="earnerImage" src={Step3} alt="learner_img" />
                    </div>
                    <div className="lockContainer">
                        <img src={LockIcon} alt="lock_icon" />
                    </div>
                </div>
                <div className="earnerTitle">Interact Certified: Earner NFT</div>
                <div className="earnerSubtitle">Your proof of airdrop expertise</div>
                <div className="claimButton">Claim</div>
            </div>
            <img className="path4" src={Path4} alt="path4" />
        </div>
    );
};

export default Earner;
