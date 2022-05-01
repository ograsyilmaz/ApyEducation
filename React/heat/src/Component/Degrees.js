import React, { Component } from 'react'

export default class Degrees extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            degree: 0,
            celsius: 0,
            fahrenheit: 0,
            kelvin: 0,
        };

        this.incrementClickHeatCount = this.incrementClickHeatCount.bind(this); 
    }

    incrementClickHeatCount() {

        this.setState((prevState) => ({
            degree: prevState.degree + 1,
            kelvin: prevState.degree + 273,
           
            fahrenheit: ((prevState.degree * 18) / 10) + 32,
        }));
        this.setState((prevState) => ({
          
          celsius: prevState.degree,
         
      }));
    }

  render() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            backgroundColor: '#000',
            color: '#fff',

        }}>
        <div style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
        }}>
          degree: {this.state.degree}
        </div>
        <div>
          kelvin: {this.state.kelvin}
        </div>
        <div>
          celsius: {this.state.celsius}
        </div>
        <div>
          fahrenheit: {this.state.fahrenheit}
        </div>
        <button style={{
            backgroundColor: '#fff',
            color: '#000',
            border: '1px solid #000',
            padding: '10px',
            margin: '10px',
            borderRadius: '5px',
            cursor: 'pointer',

        }} onClick={this.incrementClickHeatCount}>
          Increase Heat
        </button>
      </div>
    )
  }
}