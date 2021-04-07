import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard'


const Reservations = ({ reservations }) => {
  const reservationCards = reservations.map(booking => {
    return (
      <ReservationCard 
        guestName={booking.name}
        date={booking.date}
        numOfGuest={booking.number}
        time={booking.time}
      />
    )
  })
  return(
    <div>
      {reservationCards}
    </div>
  )
}

export default Reservations;
