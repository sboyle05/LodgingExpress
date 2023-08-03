import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./DeleteSpot.css"
import { fetchDeleteSpot } from "../../store/spots";
import {  useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
function DeleteSpotModal({spotId, closeModal}){
    const dispatch = useDispatch();

    //     const [showMenu, setShowMenu] = useState(false);
//   const ulRef = useRef();

//   const openMenu = () => {
//     if (showMenu) return;
//     setShowMenu(true);
//   };

//   useEffect(() => {
//     if (!showMenu) return;

//     const closeMenu = (e) => {
//       if (!ulRef.current.contains(e.target)) {
//         setShowMenu(false);
//       }
//     };

//     document.addEventListener('click', closeMenu);

//     return () => document.removeEventListener("click", closeMenu);
//   }, [showMenu]);

//     const dispatch = useDispatch();
//     const spotId = useParams().id
//     console.log("SPOT_ID", spotId)
//     const { closeModal } = useModal();

      return (
        <>
        <section className="deleteModal">
            <h1>Confirm Delete</h1>
            <h2>Are you sure you want to remove this spot from the listings?</h2>
            <section className="deleteButton">
                <button onClick={() => {
                    dispatch(fetchDeleteSpot(spotId))
                    .then(closeModal)
                }}
                >Yes (Delete Spot)</button></section>

            <section className="dontDelete"><button
            onClick={closeModal}>No (Keep Spot)</button></section>
        </section>
        </>
      )
}



export default DeleteSpotModal;
