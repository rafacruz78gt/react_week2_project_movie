import React, { useState, useEffect } from 'react';
import ReviewData from './ReviewData';

//list of reviews per movie to display after review form
function ReviewList() {
    const [ reviews, setReviews ] = useState([]);

    useEffect(() => {
        //get reviews from review data file
        fetch(ReviewData)
            // .then(res => res.json())
            .then((reviews) => {
                setReviews(reviews);
            });
    }, []);
        
    return <div>
        {reviews.length > 0 && reviews.map((review) => 
            <ReviewData key={review.id} data={review}/>
        )}
    </div>
}

export default ReviewList;
