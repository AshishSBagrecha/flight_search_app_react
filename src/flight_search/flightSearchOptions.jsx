import React, { Component } from 'react';
import './flightSearchOptions.css'; // Import CSS file for styling

class FlightSearchOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceCity: '',
      destinationCity: '',
      travelDate: '',
      returnDate: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
  
    const { sourceCity, destinationCity, travelDate, returnDate } = this.state;
  
    try {
      const response = await fetch('http://localhost:9000/flights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sourceCity, destinationCity, travelDate, returnDate })
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch flights');
      }
  
      const flights = await response.json();
      this.props.onFlightsFetched(flights);
  
    } catch (error) {
      console.error('Error fetching flights:', error.message);
      // Handle error (e.g., show error message to user)
    }
  }
  
  

  render() {
    // Hardcoded city options
    const cities = [
      "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai",
      "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow",
      "Kanpur", "Nagpur", "Visakhapatnam", "Indore", "Thane",
      "Bhopal", "Patna", "Vadodara", "Ghaziabad", "Ludhiana"
    ];

    return (
      <div className="flight-search-options-container">
        <form onSubmit={this.handleSubmit} className="flight-search-form">
          <div className="input-group">
            <label>
              Source City:
              <select
                name="sourceCity"
                value={this.state.sourceCity}
                onChange={this.handleChange}
                required
              >
                <option value="">Select a city</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </label>
            <label>
              Destination City:
              <select
                name="destinationCity"
                value={this.state.destinationCity}
                onChange={this.handleChange}
                required
              >
                <option value="">Select a city</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="input-group">
            <label>
              Travel Date:
              <input 
                type="date"
                name="travelDate"
                value={this.state.travelDate}
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              Return Date (Optional):
              <input 
                type="date"
                name="returnDate"
                value={this.state.returnDate}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default FlightSearchOptions;
