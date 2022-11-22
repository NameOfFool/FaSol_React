import React, { FC } from 'react';
import LoginForm from '../components/LoginForm';
import useDocumentTitle from "../utils/useDocumentTitle";

const Admin: FC = () => {
    useDocumentTitle("Администратор");

    return (
        <div>
            <LoginForm />
        </div>
    );
};

export default Admin;