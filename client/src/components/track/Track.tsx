import { FC } from 'react';
import "./track.css"
import PlayButton from './PlayButton';
import { TrackResponse } from '../../models/response/TrackResponse';
interface TrackData {
    track: TrackResponse
}
const Track: FC<TrackData> = ({ track }) => {
    const url = track.artist.name.replaceAll(" ", "_") + "-" + track.name.replaceAll(" ", "_")
    const trackdata = require("../../tracks/" + url + ".mp3");
    return (
        <div className="container-song">
            <div className="cover-container">
                <img src={require("../../img/" + url + ".jpg")} alt="Another Love" />
            </div>
            <div className="info-container"><span>{track.name}</span>
                <div className="contributors">
                    <p className="track-artist">{track.artist.name}</p>
                </div>
            </div>
            <p className="duration">{track.duration.substring(0,5)}</p>
            <PlayButton url={trackdata} />
        </div>
    );
};

export default Track;