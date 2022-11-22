import { FC, useState, useEffect } from 'react';
import "./PlayButton.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
interface Props {
    url: string
}
const PlayButton: FC<Props> = ({ url }: Props) => {
    const [audio] = useState(new Audio(url))
    const [playing, setPlaying] = useState(false);
    const toggle = () => setPlaying(!playing);
    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [audio, playing])
    useEffect(() => {
        audio.addEventListener("ended", () => setPlaying(false));
        return () => {
            audio.removeEventListener("ended", () => setPlaying(false));
        }
    })
    return (
        <FontAwesomeIcon className='icon-controller' onClick={toggle} icon={playing ? faPause : faPlay} />

    );
};

export default PlayButton;