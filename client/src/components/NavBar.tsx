import React, { FC, useContext } from 'react';
import { Nav, Container, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { Context } from '..';

const NavBar: FC = () => {
    const { store } = useContext(Context);
    return (
        <Navbar bg="light" variant="light">
            <Container className="d-flex justify-content-around">
                <NavLink className="text-dark" to={MAIN_ROUTE}>FaSol</NavLink>
                <Nav className=" text-dark">
                    <Nav.Link href="">Главная</Nav.Link>
                    <Nav.Link href={LOGIN_ROUTE}>Войти</Nav.Link>
                    <Nav.Link href={REGISTRATION_ROUTE}>Регистрация</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    );
};

export default NavBar;