import React from "react";
import './SingleSpot.css';
import { fetchReceiveSpot } from "../../store/spots";
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { fetchLoadSpotReviews } from "../../store/reviews";

const SingleSpot = ()=> {
    const dispatch = useDispatch();
    const {spotId} = useParams();
    const history = useHistory()
    const [goToSpot, setGoToSpot] = useState(spotId);
    const spot = useSelector(state=>state.spots[spotId])
    console.log("spotId:::",spotId)
    const reviews = useSelector(state=> state.reviews && state.reviews[spotId])
    // const reviewData = reviews.review
    // console.log("review:", reviewData)
    console.log("spot:::::",spot)
    console.log("****reviewInfo::::",reviews)
    useEffect(() => {
        dispatch(fetchReceiveSpot(spotId))
        dispatch(fetchLoadSpotReviews(spotId))
      }, [dispatch, spotId])

    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/spots/${goToSpot}`);
    }
    if(!spot || !spot.Owner || !spotId)return null;
    // if(!reviews) return null

    return (
        <section className="singleSpot">
            <section className="spotNameLocation">
             <h1>{spot.name}</h1>
            <h3>{spot.city}, {spot.state}, {spot.country}</h3>
            </section>
            <section className="spotImages">
            {Array.isArray(spot.SpotImages) && spot.SpotImages.map((image, index) => (
                <img
                className={index === 0 ? "large-image" : "small-image"}
                key={index} src={image.url} alt={`${spot.name} ${index + 1}`} />
            ))}
            </section>
            <section className="spotInfo">
                    <section className="owner_des">
                    <div className="ownerInfo">Hosted by {spot.Owner.firstName} {spot.Owner.lastName}</div>
                    <div className="spotDescription">{spot.description}</div>
                    </section>
                    <section className="price_reserveButContainer">

                        <section className="priceAndReviews">
                    <div>${spot.price} night</div>

                    <div className="reviewsStar"> <i className="fa-solid fa-star"></i> {spot.avgRating} &#x2022;
                    {spot.numReviews > 1
                    ? <span>{spot.numReviews} reviews</span>
                    : spot.numReviews === 1
                    ? <span> {spot.numReviews} review</span>
                    : <span> New</span>
                    }</div>
                    </section>
                    <section className="resBut">
                    <button className="reserveButton">Reserve</button>
                    </section>
                    </section>
            </section>

            <section className="reviews">
                <span><h1><i className="fa-solid fa-star"></i> {spot.avgRating}   &#x2022;   {spot.numReviews > 1
                    ? <span>{spot.numReviews} reviews</span>
                    : spot.numReviews === 1
                    ? <span> {spot.numReviews} review</span>
                    : <span> New</span>
                    }</h1></span>
             {Array.isArray(reviews) && reviews.map((review, index) => (
               <div key ={index}>{review.createdAt}{review.review}</div>
             ))}
            </section>
        </section>
    )
}

export default SingleSpot;
