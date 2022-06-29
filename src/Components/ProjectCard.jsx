import React from "react";

function Card({ title, image, link }) {

    return (
        <button className="Card">
            <h3 className="Card--Title">{title}</h3>
            <img className="Card--Image" src={image} alt='project' />


        </button>
    )

}


export default Card