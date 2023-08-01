import React from "react";
import './SingleSpot.css';
import { fetchReceiveSpot } from "../../store/spots";
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useState } from 'react';


const SingleSpot = ()=> {
    const dispatch = useDispatch();
    const {spotId} = useParams();
    const history = useHistory()
    const [goToSpot, setGoToSpot] = useState(spotId);
    const spot = useSelector(state=>state.spots[spotId])


    useEffect(() => {
        dispatch(fetchReceiveSpot(spotId))
      }, [dispatch, spotId])

    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/spots/${goToSpot}`);
    }
    if(!spot || !spot.Owner)return null;

    return (
        <section className="singleSpot">
            <section className="spotNameLocation">
             <h1>{spot.name}</h1>
            <h3>{spot.city}, {spot.state}, {spot.country}</h3>
            </section>
            <section className="spotImages">
            {Array.isArray(spot.SpotImages) && spot.SpotImages.map((image, index) => (
                <img key={index} src={image.url} alt={`${spot.name} ${index + 1}`} />
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

                    <div><i className="fa-solid fa-star"></i>{spot.avgRating} &#x2022;
                    {spot.numReviews > 1
                    ? <span>{spot.numReviews} reviews</span>
                    : spot.numReviews === 1
                    ? <span> {spot.numReviews} review</span>
                    : <span>New</span>
                    }</div>
                    </section>
                    <button>Reserve</button>
                    </section>
            </section>

            <section className="reviews">
                <span><h1>review text will go here</h1></span>
            </section>
        </section>
    )
}

export default SingleSpot;
