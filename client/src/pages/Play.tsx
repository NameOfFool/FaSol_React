import React, {FC} from 'react';
import useDocumentTitle from "../utils/useDocumentTitle";

const Play :FC = () => {
    useDocumentTitle("Музыка");
    return (
        <div>
          Play music
        </div>
    );
};

export default Play;