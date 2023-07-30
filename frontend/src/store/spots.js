/** Action Type Constants: */

export const LOAD_SPOTS = 'spots/LOAD_SPOTS';

export const RECEIVE_SPOT = 'spots/RECEIVE_SPOT';


/**  Action Creators: */
export const loadSpots = (spots) => ({
    type: LOAD_SPOTS,
    spots,
  });

export const receiveSpot = (spot) => ({
    type: RECEIVE_SPOT,
    spot,
});


/** Thunk Action Creators: */

export const fetchSpots = () => async (dispatch) => {
    const response = await fetch('/api/spots');
    if(response.ok){
        const data = await response.json();
        const spots = data.Spots;
        // console.log("spots:::", spots)
        dispatch(loadSpots(spots))
    }

}

export const fetchReceiveSpot = (spotId) => async (dispatch) => {
    const response = await fetch (`/api/spots/${spotId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if(response.ok){
        const spot = await response.json()
        dispatch(receiveSpot(spot))
    } else{
        const error = await response.json()
        return error
    }
}

/**SPOTS REDUCER */
// const initialState = {spots: []}
const spotsReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_SPOTS:
            console.log("action.spots::", action.spots)
            // return { ...state, spots: [...action.spots] };
            const spotsState = {};
            action.spots.forEach((spot) => {
                spotsState[spot.id] = spot;
            });
            return spotsState
            case RECEIVE_SPOT:
                return { ...state, [action.spot.id]: action.spot };

    default:
        return state;
    }
}

export default spotsReducer
