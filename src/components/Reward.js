import { Arrow, Checkmark, DiscordLogo, RewardGif } from '../assets/images';
import './Reward.css';

const Reward = () => {
    return (
        <div className="rewardBlock">
            <div className="rewardContainer">
                <img className="rewardGif" src={RewardGif} alt="reward_gif" />
                <div className="luckyDraw">Lucky Draw</div>
                <div className="community">
                    Exclusive Community
                    <div className="discordContainer">
                        <img src={DiscordLogo} alt="discord_logo" />
                        <div>Earndrop</div>
                    </div>
                </div>
                <div className="rewardDivider" />
                <div className="rowAlignment">
                    Complete all Essential quests
                    <div className="checkmarkContainer">
                        <img className="checkmarkImg" src={Checkmark} alt="reward_checkmark1" />
                    </div>
                </div>
                <div className="rowAlignment">
                    Complete at least 1 Alpha Hub quest today
                    <div className="checkmarkContainer">
                        <img className="checkmarkImg" src={Checkmark} alt="reward_checkmark1" />
                    </div>
                </div>
                <div className="rewardButton">
                    Claim Now
                    <img src={Arrow} alt="rewards_arrow" />
                </div>

                <div className="rewardInfoContainer">
                    <div className="infoHeader">Reward Info</div>
                    <div className="rewardDetails">
                        <p className="rewardDetailsTitle">Free access to paid KOL (crypto earning) communities!</p>
                        <p className="rewardDetailsBody">
                            Win access to exclusive earning communities of some of the the greatest earners in crypto
                            for a month, every 24 hours. Get access to unmatched insights, a close-knit community of the
                            best airdrop earners, and more.
                        </p>
                        <p className="rewardDetailsBody">
                            To win: make sure you've connected your Twitter and Discord accounts - and follow our
                            criteria!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reward;
