import "./App.css";
import React from "react";
import HeatDisplay from "./Component/heatDisplay";
import HeatList from './Component/heatList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      degree: 0,
      // celsius: 0,
      // fahrenheit: 0,
      // kelvin: 0,
    };
    this.incrementClickHeatCount = this.incrementClickHeatCount.bind(this);
  }

  incrementClickHeatCount(test) {

    this.setState((prevState) => ({
      degree: prevState.degree + 1,
    // kelvin: prevState.degree + 273,
    // celsius: prevState.degree,
    // fahrenheit: ((prevState.degree * 18) / 10) + 32,
    }));
// this.setState((state)=>{
//   return {
//     degree: state.degree + 1,
//     kelvin: state.degree + 273,
//     celsius: state.degree,
//     fahrenheit: ((state.degree * 18) / 10) + 32,
//   }
// })

    // this.setState({
    //   degree: this.state.degree + 1,
    //   kelvin: this.state.degree + 273,
    //   celsius: this.state.degree,
    //   fahrenheit: ((this.state.degree * 18) / 10) + 32,
    // });
  }

  render() {
    return (
      <div className="App">
        derece : {this.state.degree}
        {/* kelvin: {this.state.kelvin}
        celsius :{this.state.celsius}
        fahrenheit: {this.state.fahrenheit} */}

        <HeatDisplay
        
        nowHeat={this.state.degree}
        displayTitle={"Sıcak Artırımı"}
        displayincrementClickHeat={this.incrementClickHeatCount}
        />
       <HeatList
       celciusField={this.state.degree}
       fahrenheitField={this.state.degree}
       kelvinField={this.state.degree}
       />
      </div>
    );
  }
}

export default App;
