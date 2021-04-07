import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '', 
      time: '',
      number: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          // value={}
          // onChange={}
        />
        <input
          type="text"
          placeholder="Date (mm/dd)"
          name="date"
          // value={}
          // onChange={}
        />
        <input
          type="text"
          placeholder="Time"
          name="time"
          // value={}
          // onChange={}
        />
        <input
          type="text"
          placeholder="Number of Guest"
          name="number"
          // value={}
          // onChange={}
        />
        <button>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
