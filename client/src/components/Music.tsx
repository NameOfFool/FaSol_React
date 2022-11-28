import React, { FC, useContext, useState, useEffect } from 'react';
import { Nav, Container, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { MAIN_ROUTE } from '../utils/consts';
import { Context } from '..';
import Track from './track/Track';
import TrackService from '../services/TrackService';
import { AxiosResponse } from 'axios';
import { TrackResponse } from '../models/response/TrackResponse';
import { ITrack } from '../models/ITrack';

const Music: FC = () => {
    const [tracks, setTracks] = useState<TrackResponse[]>([])
    useEffect(() => {
        TrackService.getAll().then((tracks) => {
            setTracks(tracks.data)
        })
    }, [])

    return (
        <Container className="mt-5">
            {tracks.map((track) =>
                <Track track={track} key={track.id} />
            )
            }

        </Container>

    );
};

export default Music;