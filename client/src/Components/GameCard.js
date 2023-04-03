import React from "react";
import Rating from "./Rating"
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";

function GameCard(props) {

    // if (!game) {
    //     return null
    //   }

    // const { name, image_url} = game



    return (
        <div className="cards">
            <h3>{props.name}</h3>
            <img alt="" src={props.image_url}></img>
            <span>Rating</span>
            {/* <Rating score={props.average_score} /> */}
            <Reviews />
            <ReviewForm />
        </div>
    )

}

export default GameCard;