import { csrfFetch } from './csrf';

export const LOAD_BOOKINGS = 'bookings/LOAD_BOOKINGS';
export const UPDATE_BOOKING = 'bookings/UPDATE_BOOKING';
export const DELETE_BOOKING = 'bookings/DELETE_BOOKING';
export const ADD_BOOKING = 'bookings/ADD_BOOKING';

export const addBooking = (booking) => ({
	type: ADD_BOOKING,
	booking,
});

export const loadBookings = (bookings) => ({
	type: LOAD_BOOKINGS,
	bookings,
});

export const editBooking = (booking) => ({
	type: UPDATE_BOOKING,
	booking,
});

export const deleteBooking = (bookingId) => ({
	type: DELETE_BOOKING,
	bookingId,
});

export const fetchBookings = () => async (dispatch) => {
	const response = await fetch('/api/bookings/current');
	if (response.ok) {
		const data = await response.json();
		const bookings = data.Bookings;
		dispatch(loadBookings(bookings));
	}
};

export const createBooking = (booking) => async (dispatch) => {
	try {
		const response = await csrfFetch('/api/bookings', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(booking),
		});

		if (response.ok) {
			const newBooking = await response.json();
			dispatch(addBooking(newBooking));
			return newBooking;
		} else {
			const errors = await response.json();
			return errors;
		}
	} catch (error) {
		console.error('Error in createBooking thunk', error);
	}
};

export const fetchUpdateBooking =
	(bookingId, updatedBooking) => async (dispatch) => {
		const response = await csrfFetch(`/api/bookings/${bookingId}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(updatedBooking),
		});
		if (response.ok) {
			const booking = await response.json();
			dispatch(editBooking(booking));
		} else {
			const error = await response.json();
			return error;
		}
	};

  export const fetchDeleteBooking = (bookingId) => async (dispatch) => {
    try {
        const response = await csrfFetch(`/api/bookings/${bookingId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            dispatch(deleteBooking(bookingId));
            return { success: true };
        } else {
            const error = await response.json();
            console.log("error****in thunk***", error)
            return { success: false, error };
        }
    } catch (error) {
        console.error("error in catch of thunk", error);

        if(error instanceof Response && error.body) {
            try {
                const errorBody = await error.json();
                return { success: false, error: errorBody };
            } catch(parseError) {
                console.error("Error parsing error response", parseError);
            }
        }

        return { success: false, error: { message: 'An unknown error occurred' } };
    }
};


const bookingsReducer = (state = {}, action) => {
	switch (action.type) {
		case ADD_BOOKING:
			return {
				...state,
				[action.booking.id]: action.booking,
			};
		case LOAD_BOOKINGS:
			const bookingsState = {};
			action.bookings.forEach((booking) => {
				bookingsState[booking.id] = booking;
			});
			return bookingsState;
		case UPDATE_BOOKING:
			return { ...state, [action.booking.id]: action.booking };
		case DELETE_BOOKING:
			const newState = { ...state };
			delete newState[action.bookingId];
			return newState;
		default:
			return state;
	}
};

export default bookingsReducer;
