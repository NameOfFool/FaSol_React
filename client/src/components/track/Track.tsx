import { FC } from 'react';
import "./track.css"
import PlayButton from './PlayButton';
import { TrackResponse } from '../../models/response/TrackResponse';
interface TrackData {
    track: TrackResponse
}
const Track: FC<TrackData> = ({ track }) => {
    const trackdata = require("../../tracks/Tom_Odell-Another_Love.mp3");
    return (
        <div className="container-song">
            <div className="cover-container">
                <img src={require("../../img/56x56-000000-80-0-0.jpg")} alt="Another Love" />
            </div>
            <div className="info-container"><span>{track.name}</span>
                <div className="contributors">
                    <p className="track-artist">{track.artist.name}</p>
                </div>
            </div>
            <p className="duration">4:04</p>
            <PlayButton url={trackdata} />
        </div>
    );
};

export default Track;