import React, { FC, useContext } from 'react';
import { Nav, Container, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { MAIN_ROUTE } from '../utils/consts';
import { Context } from '..';
import Track from './track/Track';
import TrackService from '../services/TrackService';

const Music: FC = () => {
    async function getTracks() {
        console.log(await TrackService.getAll())
    }
    return (
        <Container className="mt-5">
            <span onClick={getTracks}>!!!</span>
            <Track />
        </Container>

    );
};

export default Music;