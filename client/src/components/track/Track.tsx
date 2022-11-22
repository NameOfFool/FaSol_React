import { FC } from 'react';
import "./track.css"
import PlayButton from './PlayButton';
const Track: FC = () => {
    const track = require("../../tracks/Tom_Odell-Another_Love.mp3");
    return (
        <div className="container-song">
            <div className="cover-container">
                <img src={require("../../img/56x56-000000-80-0-0.jpg")} alt="Another Love" />
            </div>
            <div className="info-container"><span>Another Love</span>
                <div className="contributors">
                    <p className="track-artist">Tom Odell</p>
                </div>
            </div>
            <p className="duration">4:04</p>
            <PlayButton url={track} />
        </div>
    );
};

export default Track;