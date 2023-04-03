import React, { useState } from "react";
import { Fragment, useParams } from "react";

function ReviewForm({game, id}) {
  
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState('');

  // const { id } = useParams();

  // const ratingOptions = [5,4,3,2,1].map((score, index) => {
  //   return (
  //     <Fragment key={index}>
  //       <input type="radio" value={score} checked={game.review.score == score} onChange={()=>console.log('onChange')} name="rating" id={`rating-${score}`}/>
  //       <label onClick={game.setRating.bind(this, score)}></label>
  //     </Fragment>
  //   )
  // })

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      game: game,
      review: review,
    };

   
    fetch(`./games/${id}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setReviews([...reviews, data]);
        setReview('');
      });

  }
      return (
        <div>
          <h2>{game}</h2>
        <h3>Leave a Review</h3>
        <form onSubmit={handleSubmit}>
        
          <div>
            <label htmlFor="review">Review:</label>
            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
            <section>
              {/* {ratingOptions} */}
            </section>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      )

}

export default ReviewForm