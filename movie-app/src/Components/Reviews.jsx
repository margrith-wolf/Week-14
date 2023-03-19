import React, { useState } from 'react';
import ReviewList from './ReviewList';
import EachReview from './EachReview';

export default function Reviews() {

 const [reviews, setReviews] = useState(ReviewList)

    function deleteReview(id) {
        setReviews(reviews.filter((item) => {return id !== item.id}));
    }
 
    return (
        <>
            {reviews.length > 0 ? reviews.map((item, index) => {
                return <EachReview review={item} key={index} handleDelete={() => deleteReview(item.id)}/>
            }) : 'No Reviews'}
        </>
    )
}
