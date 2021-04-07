import React, { Component } from 'react';
import Reservations from '../Reservations/Reservations'
import { getReservations } from '../../APICalls/APICalls'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations().then(reservationData => this.setState({ reservations: reservationData }))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <Reservations />
      </div>
    )
  }
}

export default App;
