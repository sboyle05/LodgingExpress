import React, { useState, useEffect, useRef } from "react";
import './SpotCard.css'
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux";
import DeleteSpotModal from "../../DeleteSpotModal";


const SpotCard = ({spot}) => {

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    return (
        <>
    <section className="spotCard">
            <Link to={`/spots/${spot.id}`}>
            <section className="spotImage">
        <img src={spot.previewImage} alt={`${spot.name}`}></img>
            </section>
        <section className="spotLocation">
        <h3>{`${spot.city}, ${spot.state}`}</h3>
        <h3><i className="fa-solid fa-star"></i> {`${spot.avgRating}`}</h3>

        </section>
        <h3 className="price">{`$${spot.price} night`}</h3>
        </Link>
        <section className="manageButtons">
            <Link to={`/spots/${spot.id}/edit`}><button>Update</button></Link>
            <button onClick={(e) => {
                e.stopPropagation();
                setIsDeleteModalOpen(true)}}>Delete</button>
        </section>
    </section>
    {isDeleteModalOpen && <DeleteSpotModal spotId={spot.id} closeModal={() => setIsDeleteModalOpen(false)} />}
        </>
    )
}

export default SpotCard;
