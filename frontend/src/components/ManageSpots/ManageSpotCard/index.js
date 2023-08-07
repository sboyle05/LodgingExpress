import React from "react";
import './SpotCard.css';
import { Link } from 'react-router-dom';
import OpenModalButton from "../../OpenModalButton";
import DeleteSpotModal from "../../DeleteSpotModal";
import { useModal } from "../../../context/Modal";
const SpotCard = ({ spot }) => {
    const { closeModal } = useModal();
    return (
        <>
            <section className="spotCard">
                <Link to={`/spots/${spot.id}`}>
                    <section className="spotImage">
                        <img src={spot.previewImage} alt={`${spot.name}`}></img>
                    </section>
                    <section className="spotLocation">
                        <h3>{`${spot.city}, ${spot.state}`}</h3>
                        <h3>{spot.avgRating
                            ? <span><i className="fa-solid fa-star star-color"></i> {`${spot.avgRating}`}</span>
                            : <span><i className="fa-solid fa-star star-color"></i> New</span>}</h3>
                    </section>
                    <h3 className="price">{`$${spot.price} night`}</h3>
                </Link>
                <section className="manageButtons">
                    <Link to={`/spots/${spot.id}/edit`}><button className="manBut">Update</button></Link>
                    <OpenModalButton
                        buttonText="Delete"
                        className="manBut"
                        modalComponent={<DeleteSpotModal spotId={spot.id} closeModal={closeModal} />}
                    />
                </section>
            </section>
        </>
    )
}

export default SpotCard;
