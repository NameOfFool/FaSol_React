import React, { FC } from 'react';
import LoginForm from '../components/LoginForm';
import useDocumentTitle from "../utils/useDocumentTitle";
document.title = "Вход";
const Auth: FC = () => {
    useDocumentTitle("Вход");
    return (
        <LoginForm />
    );
};

export default Auth;