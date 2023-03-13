import React from "react";
import Rating from "./Rating"

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
            <Rating score={props.average_score} />
        </div>
    )

}

export default GameCard;