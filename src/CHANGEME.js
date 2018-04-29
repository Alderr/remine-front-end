import React, { Component } from 'react';
import RemineTable from './components/Table/RemineTable/RemineTable';
import BathAmountSlider from './components/Sliders/BathAmountSlider';
import BedAmountSlider from './components/Sliders/BedAmountSlider';
import APIClass from './API';

class Test extends Component {
  constructor() {
    super();
    this.API = APIClass;

    this.state = {
      properties: [],
      errorMessage: null,
      defaultBathAmount: { min: 0, max: 20 },
      defaultBedAmount: { min: 0, max: 20 },
      bathAmount: { min: 0, max: 20 },
      bedAmount: { min: 0, max: 20 },
    };
  }
  componentWillMount() {
    // Fetching data right when component mounts
    // & it's easier to handle errors here than in API.js
    // this.setState({ bathAmount: { ...this.state.bathAmount, min: 0 } });
    this.API.getLocations()
      .then(data => this.setState({ properties: data }))
      .catch(err => this.setState({ errorMessage: err }));
  }

  setBathAmountValues(values) {
    const [min, max] = values;

    this.setState({ bathAmount: { min, max } });
  }

  setBedAmountValues(values) {
    const [min, max] = values;

    this.setState({ bedAmount: { min, max } });
  }

  render() {
    return (
      <section className="testContainer">
        <div className="errorMessage">{this.state.errorMessage}</div>
        <div className="sliderContainer">
          <BathAmountSlider
            setValues={values => this.setBathAmountValues(values)}
            defaultMin={this.state.defaultBathAmount.min}
            defaultMax={this.state.defaultBathAmount.max}
          />
          <BedAmountSlider
            setValues={values => this.setBedAmountValues(values)}
            defaultMin={this.state.defaultBedAmount.min}
            defaultMax={this.state.defaultBedAmount.max}
          />
        </div>
        <RemineTable properties={this.state.properties} />
      </section>
    );
  }
}

export default Test;
