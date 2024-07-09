import { DictionaryIcon, DictionaryImage } from '../assets/images';
import './Dictionary.css';

const Dictionary = () => {
    const onDictionaryClick = () => {
        window.open('https://docs.intract.io/v/intract-academy');
    };

    return (
        <div className="dictionaryBlock">
            <div className="dictionaryHeader">
                <div className="dictionaryTitle">Crypto Dictionary</div>
                <div className="dictionarySubtitle"> Your one-stop to catch up on all crypto terms</div>
            </div>
            <div className="dictionaryContainer" onClick={onDictionaryClick}>
                <img className="dictionaryImage" src={DictionaryImage} alt="dictionary_image" />
                <div className="bottom">
                    <div class="titl">
                        <div class="bottomHeading">Web3 + Degen Glossary</div>
                        <div class="bottomSubHeading">Your own crypto dictionary</div>
                    </div>
                    <div className="dictionaryImageContainer">
                        <img src={DictionaryIcon} alt="dictionary_icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dictionary;
