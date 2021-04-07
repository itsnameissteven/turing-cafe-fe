import React, { Component } from 'react';
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form'
import { getReservations, addNewReservation } from '../../APICalls/APICalls'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
      .then(reservationData => this.setState({ reservations: reservationData }))
      .catch(err => alert(err))
  }

  addReservation = (reservation) => {
    addNewReservation(reservation)
      .then((response) => {
        if(!response.ok) {
          throw new Error(response.message)
        }
        this.setState({ reservations: [...this.state.reservations, reservation] })
      })
      .catch(err => alert(err))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation}/>
        <Reservations reservations={this.state.reservations} />
      </div>
    )
  }
}

export default App;
