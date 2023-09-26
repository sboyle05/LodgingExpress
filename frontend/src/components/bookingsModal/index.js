import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import './bookings.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  createBooking,
  fetchUpdateBooking,
  fetchDeleteBooking,
  fetchBookings,
} from '../../store/bookings';

const selectBookings = (state) => state.bookings;

const selectUserBookings = createSelector(
  [selectBookings, (state, userId, spotId) => ({ userId, spotId })],
  (bookings, { userId, spotId }) => {
    return Object.values(bookings).filter(
      (booking) => booking.userId === userId && booking.spotId === spotId
    );
  }
);

const getExcludeDates = (bookings, editingBookingId) => {
  const excludeDates = [];
  bookings.forEach((booking) => {
    if (editingBookingId && booking.id === editingBookingId) return;
    const start = new Date(booking.startDate);
    const end = new Date(booking.endDate);
    for (let day = start; day <= end; day.setDate(day.getDate() + 1)) {
      excludeDates.push(new Date(day));
    }
  });
  return excludeDates;
};

const BookingsModal = ({ userId, spotId }) => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [editingBookingId, setEditingBookingId] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const bookings = useSelector((state) =>
    selectUserBookings(state, userId, spotId)
  );

  const excludeDates = getExcludeDates(bookings, editingBookingId);

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  const isOverlapping = (newStart, newEnd, bookings, editingBookingId) => {
    for (const booking of bookings) {
      if (editingBookingId && booking.id === editingBookingId) continue;
      const existingStart = new Date(booking.startDate);
      const existingEnd = new Date(booking.endDate);
      if (
        (newStart >= existingStart && newStart < existingEnd) ||
        (newEnd > existingStart && newEnd <= existingEnd) ||
        (newStart <= existingStart && newEnd >= existingEnd)
      ) {
        return true;
      }
    }
    return false;
  };

  const handleSubmit = async () => {
    if (startDate >= endDate) {
      setErrorMsg('End date must be after the start date.');
      return;
    }
    if (isOverlapping(new Date(startDate), new Date(endDate), bookings, editingBookingId)) {
      setErrorMsg('Selected dates are already booked. Please choose another date range.');
      return;
    }
    const booking = { startDate, endDate, userId, spotId };
    if (editingBookingId) {
      await dispatch(fetchUpdateBooking(editingBookingId, booking));
    } else {
      await dispatch(createBooking(booking));
    }
    setEditingBookingId(null);
    setErrorMsg('');
  };

  const handleEdit = (bookingId) => {
    const booking = bookings.find((booking) => booking.id === bookingId);
    if (booking) {
      setStartDate(new Date(booking.startDate));
      setEndDate(new Date(booking.endDate));
      setEditingBookingId(bookingId);
    } else {
      console.error(`No booking found for bookingId: ${bookingId}`);
    }
  };

  const handleDelete = async (bookingId) => {
    try {
      await dispatch(fetchDeleteBooking(bookingId));
    } catch (error) {
      console.error(error);
      setErrorMsg('An error occurred while deleting the booking.');
    }
  };

  return (
    <div className='booking-modal'>
      <h2>Manage Your Bookings</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          minDate={new Date()}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          excludeDates={excludeDates}
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          minDate={startDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          excludeDates={excludeDates}
        />
        {errorMsg && <span id='bookingError'>{errorMsg}</span>}
        <button type='submit'>
          {editingBookingId ? 'Update' : 'Create'} Booking
        </button>
      </form>
      <ul className='bookings-list'>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {`${new Date(booking.startDate).toLocaleDateString()} - ${new Date(booking.endDate).toLocaleDateString()}`}
            <button onClick={() => handleEdit(booking.id)}>Edit</button>
            <button onClick={() => handleDelete(booking.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingsModal;
