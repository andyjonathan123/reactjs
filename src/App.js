import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor () {
    super()

    this.state = {
       name : "berhasil"
    }
  }
  render() {
    return (
      <div>
       <div>menggunakan data {this.state.name}</div>
      </div>
    );
  }
}

export default App;
