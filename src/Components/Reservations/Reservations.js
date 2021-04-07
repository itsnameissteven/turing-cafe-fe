import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard'
import './Reservations.css'


const Reservations = ({ reservations }) => {
  const reservationCards = reservations.map(booking => {
    return (
      <ReservationCard 
        key={booking.id}
        guestName={booking.name}
        date={booking.date}
        numOfGuest={booking.number}
        time={booking.time}
      />
    )
  })
  return(
    <div className="reservations">
      {reservationCards}
    </div>
  )
}

export default Reservations;
