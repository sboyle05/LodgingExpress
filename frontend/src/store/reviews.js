
import { csrfFetch } from "./csrf";


/** Action Type Constants: */

export const LOAD_SPOT_REVIEWS = 'reviews/LOAD_SPOT_REVIEWS';

/**  Action Creators: */
export const loadSpotReviews = (reviews) => ({
    type: LOAD_SPOT_REVIEWS,
    reviews,
  });

/** Thunk Action Creators: */
  export const fetchLoadSpotReviews = (spotId) => async (dispatch) => {
    const response = await fetch (`/api/spots/${spotId}/reviews`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if(response.ok){
        const review = await response.json()
        dispatch(loadSpotReviews(review))
    } else{
        const error = await response.json()
        return error
    }
}
