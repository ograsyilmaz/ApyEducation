import React, { Component } from "react";
 import axios from 'axios'

class App extends Component {




constructor(props){
super(props)
this.state={loadingStatus:true,data:[]}
        
}

UserData(data){
  return(
    <div>
       {data.map(item=>(
         <p key={item.id} >{item.name}  {item.username}</p>
       ))}
    </div>
   
  )
}

lodings(){
  return(<div>Lodings..</div>)
}


  componentDidMount() {

      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(result => this.setState({
          loadingStatus: false,
          data: [...result.data],
        }));
   
  }
  render() {
    return (<div>
     
      {this.state.loadingStatus ? this.lodings() : this.UserData(this.state.data)}
      </div>
    )}
}

export default App;
