import React, { Component } from "react";

class ButtonHeat extends Component {
  render() {
    return (
      <>
        <button className="Button"
        onClick={()=>this.props.incrementClickHeat()}
        
        >{this.props.title}</button>
      </>
    );
  }
}

export default ButtonHeat;
