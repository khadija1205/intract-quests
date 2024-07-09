import './Footer.css';

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="left-title">
                <p className="description">
                    intract.
                    <p className="text01">
                        We area your personal giude for exploring
                        <br />
                        web3 projects & earning 100x rewards
                    </p>
                </p>

                <div className="subtitles">
                    <div className="list">
                        <div className="titles">Intract</div>
                        <span>Explore Quests</span>
                        <span>Communities</span>
                        <span>Alpha Hub</span>
                    </div>

                    <div className="list">
                        <div className="titles">Earn</div>
                        <span>Refer & Earn</span>
                        <span>Leaderboard</span>
                        <span>Achievements</span>
                    </div>

                    <div className="list">
                        <div className="titles">About</div>
                        <span>Product Roadmap</span>
                        <span>Affiliate Program</span>
                        <span>Sign up Program</span>
                        <span>Growth Community</span>
                        <span>Blogs</span>
                    </div>

                    <div className="list">
                        <div className="titles">Support</div>
                        <span>Help Center</span>
                        <span>Create your quest</span>
                        <span>Terms of Service</span>
                        <span>Privacy Policy</span>
                        <span>Community Guidelines</span>
                    </div>
                </div>
            </div>
            <div className="divider" />
            <div className="disclaimer">
                <p>
                    Disclaimer:{' '}
                    <span>
                        Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky. There
                        may be no regulatory recourse for any loss from such transactions. We advise the viewer to
                        proceed with caution. Nothing in this website or any communication published by us amounts to,
                        is intended to be, or should be construed as investment or purchase advice of any kind or
                        financial advice or promotion under any applicable laws. Any decision made based on the content
                        provided on this website or any communication published by us shall not be attributable to us.
                    </span>
                </p>
            </div>
            <div className="divider" />
            CREATED BY
            <span className="underline"> INTRACT</span>
        </div>
    );
};

export default Footer;
