import React, { FC, useContext } from 'react';
import { Nav, Container, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { Context } from '..';

const NavBar: FC = () => {
    const { store } = useContext(Context);
    return (
        <Navbar style={{backgroundColor:"#2c3856"}}>
            <Container className="d-flex justify-content-around">
                <NavLink className="text-white" to={MAIN_ROUTE}><img className="logo" src={require("../img/logo.png")}/></NavLink>
                <Nav className=" text-white">
                    <Nav.Link style={{color:"#FFFFFF"}} href={MAIN_ROUTE}>Главная</Nav.Link>
                    <Nav.Link style={{color:"#FFFFFF"}}  href={LOGIN_ROUTE}>Войти</Nav.Link>
                    <Nav.Link style={{color:"#FFFFFF"}}  href={REGISTRATION_ROUTE}>Регистрация</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    );
};

export default NavBar;