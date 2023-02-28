import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './ReviewsDetails.css'


const ReviewsDetails = () => {
    const [reviews, setReview] = useState([])

    useEffect(() => {
        fetch(`https://assigment-12-server.onrender.com/review`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [reviews])

    return (
        <div>
            <h3 className='text-3xl text-primary  d-flex justify-center p-6 mt-10'>Users reviews</h3>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 lg:gap- lg:px-20'>
                {
                    reviews.map(review =>
                        <div data-aos="zoom-in"
                        data-aos-duration='1000' className="card_design w-full bg-base-100 shadow-xl">
                            <div  className="card-body">
                                <h2 className="card-title mx-auto">Name: {review.name}</h2>

                                <p className='rating'>rating: {review.ratting}<small className='rating-icon'><FontAwesomeIcon icon={faStar} /></small></p>

                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default ReviewsDetails;