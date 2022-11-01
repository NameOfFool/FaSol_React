import React from 'react'
import '../App.css'
const Auth = () => {
    return (
        <div className="auth">
            <form className="bg-white shadow-2xl rounded px-8 py-8">
                <p>Почта:<input className="shadow appearance-none border rounded w-full py-2 px-3" type="email" id="email" name="email" /></p>
                <p>Пароль:<input className="shadow appearance-none border rounded w-full py-2 px-3" type="password" id="password" name="password" /></p>
            </form>
        </div>
    )
}
export default Auth