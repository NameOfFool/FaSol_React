import React, { useState } from 'react'
import '../App.css'
import validator from 'validator'
import axios from 'axios'
import { redirect } from 'react-router-dom';
let emailError = "";
const Register = () => {
    const [register, setRegister] = useState(() => {
        return {
            login: "",
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
    const validatation = () => {

    }
    const getError = field => {
        let text = ""
        switch (field) {
            case 'email':
                if (register.email.length > 0 && !validator.isEmail(register.email))
                    text = "Введите корректную почту"
                break;
            default:
                break;
        }
        return (
            <span className="text-[#FF0000]">{text}</span>
        )
    }
    const submitClick = event => {
        event.preventDefault();//Отменяет стандартное поведение
        console.log(register)
        const user = {
            login: register.login
        }
        axios.post("http://localhost:3001", register).then(data => { console.log(data) }).catch(err => {
            console.log(err)
        });

    }
    return (
        <div className="Register" onSubmit={submitClick}>
            <form className="bg-white shadow-2xl rounded px-8 py-8 flex flex-col gap-10">
                <p>Логин:
                    <input onChange={changeInputRegister} className="shadow appearance-none border rounded w-full py-2 px-3" type="text" id="login" name="login" />

                </p>
                <p>Почта:<input onChange={changeInputRegister} className="shadow appearance-none border rounded w-full py-2 px-3" type="email" id="email" name="email" />
                    {getError("email")}
                </p>
                <p>Пароль:
                    <input onChange={changeInputRegister} className="shadow appearance-none border rounded w-full py-2 px-3" type="password" id="password1" name="password1" />

                </p>
                <p>Повторите пароль:
                    <input onChange={changeInputRegister} className="shadow appearance-none border rounded w-full py-2 px-3" type="password" id="password2" name="password2" />

                </p>
                <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" />
            </form>
        </div>
    )
}
export default Register