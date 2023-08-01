import React from "react";
import './AllSpots.css'
import SpotCard from "../SpotCard";
import { fetchSpots } from "../../../store/spots";
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { Switch } from "react-router-dom/cjs/react-router-dom.min";


const AllSpots =() => {
    const dispatch = useDispatch();
    const spots = Object.values(useSelector(state=>state.spots))


    useEffect(()=> {
        dispatch(fetchSpots());
    }, [dispatch])

    if(!spots)return null;
    return (

        <section className="AllSpotsContainer">
            {spots.map((spot) => (

                <Link to={`/spots/${spot.id}`}
                key={spot.id}>
                <SpotCard
                spot={spot}
                key={spot.id}/>
                </Link>

            ))}
        </section>

    )

}

export default AllSpots;
