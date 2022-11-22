import React, {FC} from 'react';
import useDocumentTitle from "../utils/useDocumentTitle";

const Playlist:FC = () => {
    useDocumentTitle("Плейлист");
    return (
        <div>
        Playlist music
        </div>
    );
};

export default Playlist;