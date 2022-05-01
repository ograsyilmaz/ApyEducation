import "./App.css";
import React from "react";
import HeatDisplay from "./Component/heatDisplay";
import HeatList from './Component/heatList'
import Degrees from './Component/Degrees'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: 0,
      // celsius: 0,
      // fahrenheit: 0,
      // kelvin: 0,
    };
    this.incrementClickHeatCount = this.incrementClickHeatCount.bind(this);
  }

  incrementClickHeatCount(test) {

    this.setState((prevState) => ({
      celsius: prevState.celsius + 1,
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
        derece : {this.state.celsius}
        {/* kelvin: {this.state.kelvin}
        celsius :{this.state.celsius}
        fahrenheit: {this.state.fahrenheit} */}

        <HeatDisplay
        
        nowHeat={this.state.celsius}
        displayTitle={"Sıcak Artırımı"}
        displayincrementClickHeat={this.incrementClickHeatCount}
        />
       <HeatList
       celciusField={this.state.celsius}
       fahrenheitField={this.state.celsius}
       kelvinField={this.state.celsius}
       />

       <Degrees/>
      </div>
    );
  }
}

export default App;
