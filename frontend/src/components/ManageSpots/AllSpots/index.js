import React from "react";
import './AllSpots.css'
import SpotCard from "../ManageSpotCard";
import { fetchSpotCurrentUser } from "../../../store/spots";
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { useModal } from "../../../context/Modal";

const ManageAllSpots =() => {
    const dispatch = useDispatch();
    const spots = Object.values(useSelector(state=>state.spots))


    useEffect(()=> {
        dispatch(fetchSpotCurrentUser());
    }, [dispatch])

    if(!spots)return null;
    return (
        <>
        <h1>Manage Spots</h1>
        <Link to='/spots/new'><button className="newSpot"> Create a new spot</button></Link>
        <section className="AllSpotsContainer">
            {spots.map((spot) => (

                <SpotCard
                spot={spot}
                key={spot.id}/>

            ))}
        </section>
        </>
    )

}

export default ManageAllSpots;
