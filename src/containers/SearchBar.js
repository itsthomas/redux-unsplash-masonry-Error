import React, { Component } from "react";

import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { fetchPhotos } from "../actions/photoActions";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // componentDidMount() {
  //   console.log(this.props);
  // }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    // Here we pass this.state.term to fetchPothos action-creator function inside photoActions.js
    this.props.fetchPhotos(this.state.term);

    // Optional
    this.setState({
      term: ""
    });
  }

  render() {
    return (
      <div className="header">
        <h1>Search for images on Unsplash</h1>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <input
            placeholder="Type your request"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

// Here we don't need to pass state via connect to this component.
// Therfor we don't need to use mapStateToProps
// We only need to pass the action creator.
// If we want to pass only the action creator, we use mapDispatchToProps

// Now there are different ways we can do so:

/* ============================================================
SOLOUTION 1 - Using mapDispatchToProps and bindActionCreators
============================================================= */
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPhotos }, dispatch);
// }

// export default connect(
//   null,
//   mapDispatchToProps
// )(SearchBar);

/* ===================================================================
SOLOUTION 2 - Passing action creator as an object. 
It's like you are using mapDispatchToProps and is the recommended way
=================================================================== */
export default connect(
  null,
  { fetchPhotos }
)(SearchBar);

/* ============================================================
SOLOUTION 3 - Using mapDispatchToProps with an argument
============================================================= */
// const mapDispatchToProps = dispatch => ({
//   fetchPhotos: term => dispatch(fetchPhotos(term))
//   // ...Other actions from other files
// });

// export default connect(
//   null,
//   mapDispatchToProps
// )(SearchBar);
