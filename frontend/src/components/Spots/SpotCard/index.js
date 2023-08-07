import React from "react";
import './SpotCard.css'
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux";


const SpotCard = ({spot}) => {

    return (
        <>
    <section className="spotCard">
            <section className="spotImage">
        <img src={spot.previewImage} alt={`${spot.name}`} title={spot.name}></img>
            </section>
        <section className="spotLocation">
        <h3>{`${spot.city}, ${spot.state}`}</h3>
         <h3>{spot.avgRating
         ?<span><i className="fa-solid fa-star star-color"></i> {`${spot.avgRating}`}</span>
         :<span><i className="fa-solid fa-star star-color"></i> New</span>}</h3>

        </section>
        <h3 className="price">{`$${spot.price} night`}</h3>
    </section>

        </>
    )
}

export default SpotCard;
