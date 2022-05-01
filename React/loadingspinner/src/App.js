import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loadingStatus: true, data: [] };
  }

  UserData(data) {
    return (
      <div>
        {data.map((item) => (
          <p key={item.id}>
           {item.username}  - {item.name} 
          </p>
        ))}
      </div>
    );
  }

  loading() {
    return <div>loading..</div>;
  }

  componentDidMount() {
    setTimeout(() => {
      axios.get("https://jsonplaceholder.typicode.com/users").then((result) =>
        this.setState({
          loadingStatus: false,
          data: [...result.data],
        })
      );
    }, 1000);
  }
  render() {
    return (
      <div>
        {this.state.loadingStatus
          ? this.loading()
          : this.UserData(this.state.data)}
      </div>
    );
  }
}

export default App;
