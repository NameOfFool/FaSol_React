import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
const Blog = () => {
    return (
        <div className="nav w-full">
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/Auth">Вход</Link></li>
                <li><Link to="/Register">Регистрация</Link></li>
            </ul>
        </div>
    )
}
export default Blog