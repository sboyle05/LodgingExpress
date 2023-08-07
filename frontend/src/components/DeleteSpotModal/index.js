import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./DeleteSpot.css"
import { fetchDeleteSpot } from "../../store/spots";
import {  useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
function DeleteSpotModal({spotId, closeModal}){
    const dispatch = useDispatch();

      return (
        <>
        <section className="deleteModal">
            <h1>Confirm Delete</h1>
            <h2 className="deleteConfirm">Are you sure you want to remove this spot from the listings?</h2>
            <section className="deleteButton">
                <button className='delete'onClick={() => {
                    dispatch(fetchDeleteSpot(spotId))
                    .then(closeModal)
                }}
                >Yes (Delete Spot)</button></section>

            <section className="dontDelete">
            <button className="noDelete"
            onClick={closeModal}>No (Keep Spot)</button></section>
        </section>
        </>
      )
}



export default DeleteSpotModal;
