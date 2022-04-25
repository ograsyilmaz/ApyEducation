import React, { Component } from "react";
import ButtonHeat from './ButtonHeat'

class HeatDisplay extends Component {
  render() {
    return (
      <>

       <h1>Hava Nasıl</h1>
        <p>Şuan Sıcaklık {this.props.nowHeat}  C° </p>

      <ButtonHeat
      incrementClickHeat ={this.props.displayincrementClickHeat}
      title ={this.props.displayTitle}
      
      />


   
      </>
    );
  }
}

export default HeatDisplay;