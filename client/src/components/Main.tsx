import React, { FC, useContext } from 'react';
import { Nav, Container, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { MAIN_ROUTE } from '../utils/consts';
import { Context } from '..';

const NavBar: FC = () => {
    const { store } = useContext(Context);
    return (
        <Container>
            <div className='d-flex rounded align-items-center w-100' style={}></div>
        </Container>

    );
};

export default NavBar;