import React, { FC } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Music from '../components/Music';
import useDocumentTitle from "../utils/useDocumentTitle"

const Main: FC = () => {
    useDocumentTitle("Главная");
    return (
        <Container>
            <Music />
        </Container>
    );
};

export default Main;