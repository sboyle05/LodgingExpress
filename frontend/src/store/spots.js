/** Action Type Constants: */

export const LOAD_SPOTS = 'spots/LOAD_SPOTS';



/**  Action Creators: */
export const loadSpots = (spots) => ({
    type: LOAD_SPOTS,
    spots,
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

    default:
        return state;
    }
}

export default spotsReducer
