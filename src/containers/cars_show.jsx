import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Aside from '../components/aside';
import { Link } from 'react-router-dom';

class CarsIndex extends Component {
  render() {
    const car = this.props.car;
    return [
      <Aside key="aside" garage={this.props.garage}>
        <Link to="/">Back to list</Link>
      </Aside>,
      <div className="car-container" key="car">
        <div className="car-card">
          <img className="car-picture" src="https://raw.githubusercontent.com/lewagon/garage-redux/master/assets/images/mechanic.jpg" />
          <div className="car-details">
            <span>{car.brand} - {car.model}</span>
            <ul>
              <li><strong>Owner:</strong> {car.owner}</li>
            </ul>
            <span className="plate">{car.plate}</span>
          </div>
        </div>
      </div>
    ];
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id);
  return {
    car: state.cars.find((car) => car.id === id),
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchCars }, dispatch);
// }

export default connect(mapStateToProps)(CarsIndex);
