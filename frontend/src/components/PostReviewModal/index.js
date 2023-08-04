import StarRating from "../StarRating";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useModal } from "../../context/Modal";
import OpenModalButton from "../OpenModalButton";
import './PostReviewModal.css';
import { createReview } from "../../store/reviews";

function PostReviewModal({spotId}){
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
        .then(closeModal)
        .catch((error)=> {
            setErrors(error)
        })
    }
    return (
        <section className="reviewModalContainer">
            <form onSubmit={handleSubmit}>
            <h3>How was your stay?</h3>

            <label>
                <input
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
                >Submit Your Review</button>
            </section>
            </form>
        </section>
    )
}

export default PostReviewModal;
