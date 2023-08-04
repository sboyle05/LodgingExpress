import React from "react";
import './SingleSpot.css';
import { fetchReceiveSpot } from "../../store/spots";
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useModal } from "../../context/Modal";
import { fetchDeleteReview, fetchLoadSpotReviews } from "../../store/reviews";
import { fetchUserReviews } from "../../store/reviews";
import OpenModalButton from "../OpenModalButton";
import PostReviewModal from "../PostReviewModal";
import DeleteReviewModal from "../DeleteReviewModal";

const SingleSpot = ()=> {
    const dispatch = useDispatch();
    const {spotId} = useParams();

    const history = useHistory()
    const [goToSpot, setGoToSpot] = useState(spotId);
    const spot = useSelector(state=> state.spots[spotId])
    const sessionUser = useSelector((state) => state.session.user);
    const [userReviews, setUserReviews] = useState([]);
    const [hasReview, setHasReview] = useState(false)
    // console.log("USERREVIEWS AT TOP", hasReview)

    // const reviews = useSelector(state=> state.reviews && state.reviews[spotId])
    const reviewIds = useSelector(state => state.reviews.spotReviews && state.reviews.spotReviews[spotId]);
    // console.log("reviewIds from useSelector",reviewIds)
    const allReviews = useSelector(state => state.reviews.reviews);
    // console.log("allreviews from useSelector", allReviews)
    const reviews = reviewIds && reviewIds.map(id => allReviews[id]);
    // console.log("reviews from useSelector", reviews)
    useEffect(() => {
        if(sessionUser){
        dispatch(fetchUserReviews())
            .then(reviews => {
                // console.log("reviews in fetch", reviews)

               const foundReview = Object.values(reviews).find((review) => {
                    // console.log("FIND REVIEW.SPOT ID",review.spotId === +spotId)
                  return review.spotId === +spotId
                });
                if(foundReview){
                    setHasReview(true)
                }
                // console.log("*(***FOUNDREVIEW", foundReview)
            })
        }
    },[sessionUser, dispatch])


    useEffect(() => {
        dispatch(fetchReceiveSpot(spotId))
        dispatch(fetchLoadSpotReviews(spotId))
      }, [dispatch, spotId])

      if(!spot || !spot.Owner || !spotId)return null;

      const canPostReview = sessionUser && sessionUser.id !== spot.Owner.id && !hasReview;

    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/spots/${goToSpot}`);
    }

    const handleReviewDelete= () => {
        setHasReview(false)
        dispatch(fetchLoadSpotReviews(spotId))
    }

//SESSION CODE FOR DELETE/POST REVIEW
    let postReviewButton;
    if(canPostReview ){
        postReviewButton = (
            <>
            <OpenModalButton
            modalComponent={<PostReviewModal spotId={spotId} setHasReview={setHasReview}/>}
            buttonText="Post Review" />
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
                    <button className="reserveButton" onClick={() => alert("Feature Coming Soon!!!")}>Reserve</button>
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
                {/* {console.log("reviews from return", reviews)} */}
                {Array.isArray(reviews) && reviews.map((review, index) => (
                <div key ={index}>
                {review.User?.firstName} {review.User?.lastName} <div>{new Date(review?.createdAt).toISOString().split('T')[0]}</div>
                {review?.review}
                {sessionUser && sessionUser.id === review.userId && (
        <OpenModalButton
          modalComponent={<DeleteReviewModal reviewId={review.id} onReviewDelete={handleReviewDelete} setHasReview={setHasReview}/>}
          buttonText="Delete Review"
        />
      )}</div>
             ))}

            </section>

        </section>


    )
}

export default SingleSpot;
