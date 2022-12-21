import React, { FC, useState, useEffect, useContext } from 'react'
import { Form, Button, FormControl, FormGroup, Container } from 'react-bootstrap'
import { Context } from '../index'
import { response } from 'express'

const RegisterForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [login, setLogin] = useState<string>('')
    const [loginError, setLoginError] = useState<string>('')
    const [emailError, setEmailError] = useState<string>("")
    const [passwordError, setPasswordError] = useState<string>("")
    const { store } = useContext(Context)
    return (
        <Container className='h-75 rounded w-50 d-flex justify-content-center align-items-center text-center text-white my-5' style={{ backgroundColor: "#2c3856" }}>
            <Form className="w-50">
                <h1>Регистрация</h1>
                <Form.Group className="mb-3" controlId="formBasicLogin">
                    <Form.Label>Логин</Form.Label>
                    {(login.length > 0 && loginError != "") && <Form.Label className='text-danger d-block'>{loginError}</Form.Label>}
                    <Form.Control onChange={(e) => {
                        setLogin(e.target.value)
                    }} type="text" placeholder="Логин" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    {(email.length > 0 && emailError != "") && <Form.Label className='text-danger d-block'>{emailError}</Form.Label>}
                    <Form.Control onChange={(e) => {
                        setEmail(e.target.value)
                    }} type="email" placeholder="Почта" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    {(password.length > 0 && passwordError != "") && <Form.Label className='text-danger d-block'>{passwordError}</Form.Label>}
                    <Form.Control onChange={(e) => {
                        if (password.length < 3 || password.length > 8)
                            setPasswordError("Пароль должен быть длиннее 3 и короче 9")
                        else
                            setPasswordError("");
                        setPassword(e.target.value)
                    }} type="password" placeholder="Пароль" />
                </Form.Group>
                <Button onClick={() => {
                    if (passwordError === "") store.registration(email, password, login).then(data => {
                        if (data.message.length > 0) {
                            if (data.message.search(/почт/))
                                setEmailError(data.message);
                            if (data.message.search(/логин/))
                                setLoginError(data.message)
                        }
                    })
                }} variant="primary" type="button">
                    Регистрация
                </Button>
            </Form>
        </Container>
    )
}

export default RegisterForm