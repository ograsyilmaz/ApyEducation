import React, { Component } from "react";

class CelciusField extends Component {
  render() {
    return (
      <>
       <p>Celcius :  {this.props.celcius}  C° </p>
      </>
    );
  }
}

export default CelciusField;
