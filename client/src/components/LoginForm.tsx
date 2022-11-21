import React, { FC, useState, useEffect, useContext } from 'react'
import { Form, Button, FormControl, FormGroup, Container } from 'react-bootstrap'
import { Context } from '../index'

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { store } = useContext(Context)
    return (
        <Container className='h-100 d-flex justify-content-center align-items-center'>
            <Form className="w-50">
                <h1>Вход</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Button onClick={() => { store.login(email, password) }} variant="primary" type="button">
                    Войти
                </Button>
            </Form>
        </Container>
    )
}

export default LoginForm