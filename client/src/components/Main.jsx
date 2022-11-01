import React, { useState, useEffect } from "react"
import Cards from './Cards'
import Axios from 'axios'
const Main = () => {
    const [FilmName, setFilmName] = useState([])
    useEffect(() => {
        Axios.get('http://localhost:3001').then((res) => {
            setFilmName(res.data)
        })
    })
    return (
        <main className="h-full  mt-5 w-4/5">
            <div className="films grid grid-cols-3 justify-items-center items-start">
                {FilmName.map(f => { return <Cards key={f.ID} name={f.Name} image={f.Img} /> })}
            </div>
        </main>
    )
}
export default Main;