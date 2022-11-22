import React, {FC} from 'react';
import useDocumentTitle from "../utils/useDocumentTitle";

const User:FC = () => {
    useDocumentTitle("Личный кабинет");
    return (
        <div>
          User page
        </div>
    );
};

export default User;