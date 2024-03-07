import React, { Component } from 'react';
import FlightSearchOptions from './flight_search/flightSearchOptions';
import FlightList from './flight_list/FlightList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
      return_flights: []
    };

    this.handleFlightsFetched = this.handleFlightsFetched.bind(this);
  }

  handleFlightsFetched(flights) {
    this.setState({ flights : flights["flights"] , return_flights: flights["return_flights"] });
  }

  render() {
    return (
      <div>
        <FlightSearchOptions onFlightsFetched={this.handleFlightsFetched} />
        <FlightList flights={this.state.flights} return_flights = {this.state.return_flights} />
      </div>
    );
  }
}

export default App;
