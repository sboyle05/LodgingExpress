import React from "react";
import './SingleSpot.css';
import { fetchReceiveSpot } from "../../store/spots";
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { fetchLoadSpotReviews } from "../../store/reviews";
import { fetchUserReviews } from "../../store/reviews";
const SingleSpot = ()=> {
    const dispatch = useDispatch();
    const {spotId} = useParams();
    const history = useHistory()
    const [goToSpot, setGoToSpot] = useState(spotId);
    const spot = useSelector(state=> state.spots[spotId])
    const sessionUser = useSelector((state) => state.session.user);
    const [userReviews, setUserReviews] = useState([]);
    // console.log("USERREVIEWS AT TOP", userReviews)

    const reviews = useSelector(state=> state.reviews && state.reviews[spotId])

    useEffect(() => {
        if(sessionUser){
        dispatch(fetchUserReviews())
            .then(reviews => {
                setUserReviews(Object.values(reviews))
            })
        }
    },[sessionUser, dispatch])


    useEffect(() => {
        dispatch(fetchReceiveSpot(spotId))
        dispatch(fetchLoadSpotReviews(spotId))


      }, [dispatch, spotId])
      if(!spot || !spot.Owner || !spotId)return null;

    //   function hasReview(userReviews){
    //     for(let i = 0; i < userReviews.length; i++){
    //         let reviewId = userReviews.spotId;
    //         if(reviewId === spotId){
    //             return true
    //         } return false
    //     }
    //   }

      const hasReview = userReviews.filter((review) => review.spotId === spotId).length > 0;
      console.log("userReviews",userReviews)
      const canPostReview = sessionUser && sessionUser.id !== spot.Owner.id && !hasReview;
      console.log("hasReview", hasReview)
    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/spots/${goToSpot}`);
    }

    // if(!reviews) return null


//SESSION CODE FOR DELETE/POST REVIEW
    let postReviewButton;
    if(canPostReview ){
        postReviewButton = (
            <>
            <button className="postReviewBut">Post Review</button>
        </>
        )
    }
    let deleteReviewButton;
    if(hasReview){
        deleteReviewButton = (
            <>
            {console.log("sessionUSER:***",sessionUser.id)}
            {console.log("spotOWNER",spot.Owner.id)}
            <button className="deleteReviewBut">Delete</button>
        </>
        )
    }


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
                   {postReviewButton}
             {Array.isArray(reviews) && reviews.map((review, index) => (
               <div key ={index}>{review.User.firstName} {review.User.lastName} <div>{new Date(review.createdAt).toISOString().split('T')[0]}</div> {review.review}</div>
             ))}
              {deleteReviewButton}
            </section>

        </section>


    )
}

export default SingleSpot;
