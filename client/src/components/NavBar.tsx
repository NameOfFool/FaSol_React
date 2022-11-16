import React, { FC, useContext } from 'react';
import { Nav, Container, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { MAIN_ROUTE } from '../utils/consts';
import { Context } from '..';

const NavBar: FC = () => {
    const { store } = useContext(Context);
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <NavLink className="text-dark " to={MAIN_ROUTE}>FaSol</NavLink>
                <Nav className="me-auto text-dark">
                    <Nav.Link href="">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        
    );
};

export default NavBar;