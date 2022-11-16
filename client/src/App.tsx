import React, { FC, useContext, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import "./App.css";
import NavBar from "./components/NavBar";

const App: FC = () => {
    const { store } = useContext(Context)
    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth();
        }
    }, [])

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    )
}

export default observer(App);
