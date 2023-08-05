import StarRating from "../StarRating";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useModal } from "../../context/Modal";
import OpenModalButton from "../OpenModalButton";
import './PostReviewModal.css';
import { createReview } from "../../store/reviews";
import { fetchReceiveSpot } from "../../store/spots";

function PostReviewModal({spotId, setHasReview}){
    const dispatch = useDispatch();
    const history = useHistory();
    const { closeModal } = useModal();
    const [starRating, setStarRating] = useState(0);
    const [review, setReview] = useState('');
    const [errors, setErrors] = useState('');
    const starSelect = (stars) => {
        setStarRating(parseInt(stars))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({})
        // console.log("spotID*****",spotId)
        const newReview = { review: review, stars: starRating};
        dispatch(createReview(spotId, newReview))
        .then(() => {
            closeModal();
            setHasReview(true);
            dispatch(fetchReceiveSpot(spotId))
        })
        .catch((error)=> {
            setErrors(error)
        })
    }
    const submitReviewDisabled = starRating < 1 || review.length < 10
    return (
        <section className="reviewModalContainer">
            <form onSubmit={handleSubmit}>
            <h3 className="stay">How was your stay?</h3>
            <>{errors.message}</>
            <label>
                <input className="reviewArea"
                type="textarea"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Leave your review here..."></input>
            </label>

            <section className="stars">
            <StarRating onChange={starSelect} starRating={starRating}>Stars</StarRating>
            </section>
            <section className="submitRating">
                <button type="submit"
                disabled={submitReviewDisabled}
                >Submit Your Review</button>
            </section>
            </form>
        </section>
    )
}

export default PostReviewModal;
