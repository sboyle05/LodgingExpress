import React from "react";
import './AllSpots.css'
import SpotCard from "../SpotCard";
import { fetchSpots } from "../../../store/spots";
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';


const AllSpots =() => {
    const dispatch = useDispatch();
    const spots = Object.values(useSelector(state=>state.spots))
    console.log("spots::", spots)

    useEffect(()=> {
        dispatch(fetchSpots());
    }, [dispatch])

    if(!spots)return null;
    return (

        <section className="AllSpotsContainer">
            {spots.map((spot) => (
                <SpotCard
                spot={spot}
                key={spot.id}/>
            ))}
        </section>

    )

}

export default AllSpots;
