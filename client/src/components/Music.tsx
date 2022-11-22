import React, {FC, useContext} from 'react';
import {Nav, Container, Navbar} from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import {MAIN_ROUTE} from '../utils/consts';
import {Context} from '..';
import Track from './track/Track';

const Music: FC = () => {
    return (
        <Container className="mt-5">
            <Track/>
        </Container>

    );
};

export default Music;