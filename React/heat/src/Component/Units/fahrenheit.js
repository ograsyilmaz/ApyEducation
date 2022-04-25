import React, { Component } from "react";

class FahrenheitField extends Component {
  render() {
    return (
      <>
       <p>Fahrenheit :  {  ((this.props.fahrenheit  * 18) / 10) + 32 }  F </p>
      </>
    );
  }
}

export default FahrenheitField;
