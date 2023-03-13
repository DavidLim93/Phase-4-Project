import React from "react";
import Rating from "./Rating";

function Reviews () {

    const {title, description, score} = attributes



    return (
        <div className="reviews">
            <h3>{title}</h3>
            <p>{description}</p>
            <Rating score={score}/>
        </div>
    )

}

export default Reviews;