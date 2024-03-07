import React, { Component } from 'react';
import "./flightList.css"

class FlightList extends Component {
  render() {
    const { flights, return_flights } = this.props;
    console.log("flights", flights)
    return (
      <div className="flight-list">
        <h2>Available Flights</h2>
        <table>
          <thead>
            <tr>
              <th>Airline Name</th>
              <th>Flight Number</th>
              <th>Source City</th>
              <th>Destination</th>
              <th>Arrival</th>
              <th>Departure</th>
              <th>Duration</th>
              <th>Stops</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {flights.map(flight => (
              <tr key={flight.id}>
                <td>{flight.airline_name}</td>
                <td>{flight.flight_number}</td>
                <td>{flight.source_city}</td>
                <td>{flight.destination_city}</td>
                <td>{flight.arrival_time}</td>
                <td>{flight.departure_time}</td>
                <td>{flight.duration}</td>
                <td>{flight.num_stops}</td>
                <td>{flight.price}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Return Flights</h2>
        <table>
          <thead>
            <tr>
              <th>Airline Name</th>
              <th>Flight Number</th>
              <th>Source City</th>
              <th>Destination</th>
              <th>Arrival</th>
              <th>Departure</th>
              <th>Duration</th>
              <th>Stops</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {return_flights.map(flight => (
              <tr key={flight.id}>
                <td>{flight.airline_name}</td>
                <td>{flight.flight_number}</td>
                <td>{flight.source_city}</td>
                <td>{flight.destination_city}</td>
                <td>{flight.arrival_time}</td>
                <td>{flight.departure_time}</td>
                <td>{flight.duration}</td>
                <td>{flight.num_stops}</td>
                <td>{flight.price}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FlightList;
