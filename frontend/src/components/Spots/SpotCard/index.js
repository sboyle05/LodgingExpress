import React from "react";
import './SpotCard.css'
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux";


const SpotCard = ({spot}) => {

    return (
        <>
    <section className="spotCard">
            <section className="spotImage">
        <img src={spot.previewImage} alt={`${spot.name}`}></img>
            </section>
        <section className="spotLocation">
        <h3>{`${spot.city}, ${spot.state}`}</h3>
        <h3><i className="fa-solid fa-star"></i> {`${spot.avgRating}`}</h3>

        </section>
        <h3 className="price">{`$${spot.price} night`}</h3>
    </section>



        {/* // <h2 className="SpotCard">Spot Card</h2> */}
        </>
    )
}

export default SpotCard;
