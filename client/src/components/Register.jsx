import React, { useState } from 'react'
import '../App.css'
import validator from 'validator'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const redirect = useNavigate();
    const [register, setRegister] = useState(() => {
        return {
            login: "login",
            email: "",
            password1: "",
            password2: ""
        }
    })
    const changeInputRegister = event => {
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }
    const getError = field => {
        let text = ""
        switch (field) {
            case 'email':
                if (register.email.length > 0 && !validator.isEmail(register.email))
                    text = "Введите корректную почту"
                        
                break;
            case 'password2':
                if (register.password1.length > 0 && register.password2.length > 0 && register.password1 !== register.password2)
                    text = "Введённые пароли не совпадают"
                break;
        }
        console.log(text)
        return (
            <span className="text-[#FF0000]">{text}</span>
        )
    }
    const submitClick = event => {
        event.preventDefault();//Отменяет стандартное поведение
        console.log(register)
        axios.post("http://localhost:3001", register).then(res => {
            console.log(res.data)
            redirect("/")

        }).catch(err => {
            console.log(err)
        });

    }
    return (
        <div className="Register" onSubmit={submitClick}>
            <form className="bg-white shadow-2xl rounded px-8 py-8 flex flex-col gap-10">
                <p>Логин:
                    <input onChange={changeInputRegister} value={register.login} className="shadow appearance-none border rounded w-full py-2 px-3" type="text" id="login" name="login" />
                    {getError("login")}
                </p>
                <p>Почта:<input onChange={changeInputRegister} className="shadow appearance-none border rounded w-full py-2 px-3" type="email" id="email" name="email" />
                    {getError("email")}
                </p>
                <p>Пароль:
                    <input onChange={changeInputRegister} className="shadow appearance-none border rounded w-full py-2 px-3" type="password" id="password1" name="password1" />
                </p>
                <p>Повторите пароль:
                    <input onChange={changeInputRegister} className="shadow appearance-none border rounded w-full py-2 px-3" type="password" id="password2" name="password2" />
                    {getError("password2")}
                </p>
                <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" />
            </form>
        </div>
    )
}
export default Register