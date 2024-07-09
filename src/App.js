import './App.css';
import './components/Stickybutton';
import { GetStarted, Footer, Crypto, Learner, Earner, Reward, Dictionary } from './components';
import Airdrop from './components/Airdrop';

const App = () => {
    return (
        <div className="appContainer">
            <GetStarted />
            <div className="content">
                <Crypto />
                <Learner />
                <Airdrop />
                <Earner />
                <Reward />
                <Dictionary />
            </div>
            <Footer />
        </div>
    );
};

export default App;
