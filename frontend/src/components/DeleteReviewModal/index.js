import { useDispatch } from "react-redux";
import { useState } from "react";
import { useModal } from "../../context/Modal";
import OpenModalButton from "../OpenModalButton";
import './DeleteReviewModal.css';
import { deleteReview, fetchDeleteReview } from "../../store/reviews";

const DeleteReviewModal = ({ reviewId, onReviewDelete}) => {
    const dispatch = useDispatch();

    const { closeModal } = useModal();
    const [errors, setErrors] = useState('');

    const handleDelete = () => {
        dispatch(fetchDeleteReview(reviewId))
        .then(() => {
            if (onReviewDelete) {
                onReviewDelete();
            }
            closeModal();
        })

    }
    return (
        <>
        <section className="deleteModal">
            <h1>Confirm Delete</h1>
            <h2 className="areYouSure">Are you sure you want to delete this review?</h2>
            <section className="deleteButton">
                <button className='delete' onClick={handleDelete}

                >Yes (Delete Review)</button></section>

            <section className="dontDelete"><button className="noDelete"
            onClick={closeModal}>No (Keep Review)</button></section>
        </section>
        </>
      )
}

export default DeleteReviewModal;
