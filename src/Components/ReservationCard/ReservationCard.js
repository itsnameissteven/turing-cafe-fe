import React from 'react';
import './ReservationCard.css'

const ReservationCard = ({ guestName, date, time, numOfGuest }) => {
  return (
    <div className="reservation-card">
      <h2>{guestName}</h2>
      <p className="reservation-card__date">{date}</p>
      <p className="reservation-card__time">{time} pm</p>
      <p className="reservation-card__number-of-guest">Number of guest: {numOfGuest}</p>
      <button className="reservation-card__btn">Cancel</button>
    </div>
  )
}

export default ReservationCard;
