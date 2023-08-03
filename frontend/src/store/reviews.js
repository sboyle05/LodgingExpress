
import { csrfFetch } from "./csrf";


/** Action Type Constants: */

export const LOAD_SPOT_REVIEWS = 'reviews/LOAD_SPOT_REVIEWS';
export const LOAD_USER_REVIEWS = 'reviews/LOAD_USER_REVIEWS';


/**  Action Creators: */
export const loadSpotReviews = (spotId, reviews) => ({
    type: LOAD_SPOT_REVIEWS,
    spotId,
    reviews,
  });

export const loadUserReviews = (reviews) => ({
  type: LOAD_USER_REVIEWS,
  reviews
})



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
        // console.log("thunk loadSpotReviews data", data )
        // console.log("thunk loadSpotReviews reviews ", reviews)
    } else{
        const error = await response.json()
        return error
    }
}

export const fetchUserReviews = () => async (dispatch) => {
  const response = await csrfFetch('/api/reviews/current', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if(response.ok){
    const data = await response.json();
    const reviews = data;
    console.log("fetch reviews", reviews)
    dispatch(loadUserReviews(reviews))

    return reviews
  }else{
    const error = await response.json()
    return error
  }
}


/**Reviews REDUCER */

const reviewsReducer = (state = {}, action) => {

switch(action.type){
  case LOAD_SPOT_REVIEWS:
  //3rd attempt
  const {spotId, reviews} = action;
  return {
    ...state,
    [spotId]: reviews,
  }
  case LOAD_USER_REVIEWS:
    return {
      ...state,
      userReviews: action.reviews
    }

    default:
      return state;
}
}

export default reviewsReducer;
