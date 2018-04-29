import React, { Component } from 'react';
import RemineTable from './components/Table/RemineTable/RemineTable';
import BathAmountSlider from './components/Sliders/BathAmountSlider';
import BedAmountSlider from './components/Sliders/BedAmountSlider';
import BuildingTypeSelector from './components/Selectors/BuildingTypeSelector';
import MultiFilter from './MultiFilter';
import Filters from './Filters';
import APIClass from './API';

class Test extends Component {
  constructor() {
    super();
    this.API = APIClass;

    this.state = {
      properties: [],
      errorMessage: null,
      defaultBathAmount: { min: 0, max: 50 },
      defaultBedAmount: { min: 0, max: 150 },
      bathAmount: { min: 0, max: 50 },
      bedAmount: { min: 0, max: 150 },
      buildingTypes: null,
      buildingTypesSelected: [],
    };

    // Stops React from creating new () => { to do tasks } every render
    this.setBathAmountValues = this.setBathAmountValues.bind(this);
    this.setBedAmountValues = this.setBedAmountValues.bind(this);
    this.setBuildingTypeSelected = this.setBuildingTypeSelected.bind(this);
  }

  componentWillMount() {
    // Fetching data right when component mounts
    // & it's easier to handle errors here than in API.js
    // this.setState({ bathAmount: { ...this.state.bathAmount, min: 0 } });
    this.API.getLocations()
      .then(data => this.setState({ properties: data }))
      .catch(err => this.setState({ errorMessage: err }));

    this.API.getBuildingTypes()
      .then(data => this.setState({
        buildingTypes: data.map(item => ({ label: item.name, value: item.name })),
      }))
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

  setBuildingTypeSelected(values) {
    this.setState({ buildingTypesSelected: values });
  }

  render() {
    const { min: bedMin, max: bedMax } = this.state.bedAmount;
    const { min: bathMin, max: bathMax } = this.state.bathAmount;

    const filteredProperties = MultiFilter(this.state.properties, {
      bedAmountFilter: Filters.BedAmountFilter(bedMin, bedMax),
      bathAmountFilter: Filters.BathAmountFilter(bathMin, bathMax),
    });

    if (this.state.errorMessage) {
      return (<div className="errorMessage">{this.state.errorMessage}</div>);
    }

    return (
      <section className="testContainer">
        <div className="selectorContainer">
          <BuildingTypeSelector
            changeSelectorValue={this.setBuildingTypeSelected}
            selectorValue={this.state.buildingTypesSelected}
            buildingTypeOptions={this.state.buildingTypes}
          />
        </div>
        <div className="sliderContainer">
          <BathAmountSlider
            setValues={this.setBathAmountValues}
            defaultMin={this.state.defaultBathAmount.min}
            defaultMax={this.state.defaultBathAmount.max}
          />
          <BedAmountSlider
            setValues={this.setBedAmountValues}
            defaultMin={this.state.defaultBedAmount.min}
            defaultMax={this.state.defaultBedAmount.max}
          />
        </div>
        <RemineTable properties={filteredProperties} />
      </section>
    );
  }
}

export default Test;
