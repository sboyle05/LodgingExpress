
import { csrfFetch } from "./csrf";


/** Action Type Constants: */

export const LOAD_SPOT_REVIEWS = 'reviews/LOAD_SPOT_REVIEWS';

/**  Action Creators: */
export const loadSpotReviews = (spotId, reviews) => ({
    type: LOAD_SPOT_REVIEWS,
    spotId,
    reviews,
  });

/** Thunk Action Creators: */
  export const fetchLoadSpotReviews = (spotId) => async (dispatch) => {
    const response = await csrfFetch (`/api/spots/${spotId}/reviews`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if(response.ok){
        const data = await response.json()
        const reviews = data.Reviews;
        dispatch(loadSpotReviews(spotId, reviews))
    } else{
        const error = await response.json()
        return error
    }
}

/**Reviews REDUCER */

const reviewsReducer = (state = {}, action) => {

  switch(action.type){
    case LOAD_SPOT_REVIEWS:

      const {spotId, reviews} = action
      return {
        ...state,
        [spotId]: reviews.reduce((obj, review) => ({ ...obj, [review.id]: review}), {})
      };
      default:
        return state;
  }
}

export default reviewsReducer;
