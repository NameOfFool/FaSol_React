import React, { FC } from 'react';
import RegisterForm from '../components/RegisterForm';
import useDocumentTitle from "../utils/useDocumentTitle";

const Auth: FC = () => {
    useDocumentTitle("Регистрация");
    return (
        <RegisterForm />
    );
};

export default Auth;