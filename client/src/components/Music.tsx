import React, { FC} from 'react';
import { Container, } from "react-bootstrap";
import "../style.css";
const Music: FC = () => {
    return (
        <Container className="mt-5">
            <div className='container-song text-white'>
                <div className="cover-container"><img src={require("../img/56x56-000000-80-0-0.jpg")}  alt="" /></div>
                    <div className="info-container"><span>Another Love</span><div className="contributors"><p className="track-artist">Tom Odell</p></div>
                </div>
                <p className="duration">4:04</p>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play"
                     className="svg-inline--fa fa-play fa-w-14 icon-controller" role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor"
                          d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                </svg>
            </div>
        </Container >

    );
};

export default Music;