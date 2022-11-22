import {FC, useContext, useEffect} from 'react';
import { Nav, Container, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import {LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, USER_ROUTE} from '../utils/consts';
import { Context } from '..';
import {observer} from "mobx-react-lite";

const NavBar: FC = () => {
    const { store } = useContext(Context);
    useEffect(()=>{
    console.log(store)
    },[store])
    return (
        <Navbar style={{backgroundColor:"#2c3856"}}>

            <div className="mx-auto w-100 text-center align-items-center d-flex justify-content-around">
                <NavLink className="text-white" to={MAIN_ROUTE}><img className="logo" src={require("../img/logo.png")}/></NavLink>
                <Nav className=" text-white">
                    <Nav.Link style={{color:"#FFFFFF"}} href={MAIN_ROUTE}>Главная</Nav.Link>
                    <Nav.Link style={{color:"#FFFFFF"}}  href={!store.isAuth ?LOGIN_ROUTE:USER_ROUTE}>{!store.isAuth ?"Войти":store.user.login}</Nav.Link>
                    <Nav.Link style={{color:"#FFFFFF"}} href={!store.isAuth ?REGISTRATION_ROUTE:""}>{!store.isAuth ?"Регистрация":<span onClick={()=>store.logout()}>Выйти</span>}</Nav.Link>
                </Nav>
            </div>
        </Navbar >

    );
};

export default observer(NavBar);