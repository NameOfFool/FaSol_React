import React, { FC, useState, useEffect, useContext } from 'react'
import { Form, Button, FormControl, FormGroup, Container } from 'react-bootstrap'
import { Context } from '../index'

const RegisterForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [login, setLogin] = useState<string>('')
    const { store } = useContext(Context)
    return (
        <Container className='h-75 rounded w-50 d-flex justify-content-center align-items-center text-center text-white my-5' style={{ backgroundColor: "#2c3856" }}>
            <Form className="w-50">
                <h1>Регистрация</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control onChange={(e) => setLogin(e.target.value)} type="email" placeholder="Логин" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Почта" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Пароль" />
                </Form.Group>
                <Button onClick={() => { store.registration(email, password, login) }} variant="primary" type="button">
                    Регистрация
                </Button>
            </Form>
        </Container>
    )
}

export default RegisterForm