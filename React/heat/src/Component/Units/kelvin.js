import React, { Component } from "react";

class KelvinField extends Component {
  render() {
    return (
      <>
       <p>Kelvin :  {this.props.kelvin + 273}  K </p>
      </>
    );
  }
}

export default KelvinField;