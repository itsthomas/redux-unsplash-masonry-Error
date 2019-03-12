import React, { Component } from "react";
import "./app.scss";

import SearchBar from "./containers/SearchBar";
import PhotoList from "./containers/PhotoList";

class App extends Component {
  render() {
    return (
      <>
        <SearchBar />
        <PhotoList />
      </>
    );
  }
}

export default App;
