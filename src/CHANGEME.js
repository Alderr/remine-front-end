import React, { Component } from 'react';
import RemineTable from './components/Table/RemineTable/RemineTable';
import APIClass from './API';

class Test extends Component {
  constructor() {
    super();
    this.API = APIClass;

    this.state = {
      properties: [],
      errorMessage: null,
    };
  }
  componentWillMount() {
    // Fetching data right when component mounts
    // & it's easier to handle errors here than in API.js

    this.API.getLocations()
      .then(data => this.setState({ properties: data }))
      .catch(err => this.setState({ errorMessage: err }));
  }

  render() {
    return (
      <div className="testContainer">
        <div className="errorMessage">{this.state.errorMessage}</div>
        <div className="filterContainer">
                    Your filters go here.
        </div>
        <RemineTable properties={this.state.properties} />
      </div>
    );
  }
}

export default Test;
