import React, { Component } from "react";
import Celcius from './Units/celsius';
import Fahrenheit from './Units/fahrenheit';
import Kelvin from './Units/kelvin'

class HeatList extends Component {
  render() {
    return (
      <>
      <Celcius celcius={this.props.celciusField}  />
      <Fahrenheit fahrenheit={this.props.fahrenheitField}/>
      <Kelvin  kelvin={this.props.kelvinField}/>
      </>
    );
  }
}

export default HeatList;
