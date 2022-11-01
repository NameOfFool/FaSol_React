import React from 'react'
const Cards = (props) => {
    return (
        <div className="film container w-1/3 h-90 flex  flex-col items-center justify-center">
            <h1 className=" text-center">{props.name}</h1>
            <img className="object-scale-down" src={require("../img/" + props.image)}></img>
        </div>
    )
}
export default Cards