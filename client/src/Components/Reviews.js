import React from "react";
import Rating from "./Rating";

function Reviews ({title, description, score} ) {



    return (
        <div className="reviews">
            <h3>{title}</h3>
            <p>{description}</p>
            {/* <Rating score={score}/> */}
        </div>
    )

}

export default Reviews;