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

    Promise.all([this.API.getLocations(), this.API.getBuildingTypes()])
      .then((data) => {
        const [propertiesData, buildingTypesData] = data;
        const bedMaxFromData = Math.max(...propertiesData.map(location => location.beds), 0);
        const bathMaxFromData = Math.max(...propertiesData.map(location => location.baths), 0);

        // Less lag w/ combined setState
        this.setState({
          properties: propertiesData,
          buildingTypes: buildingTypesData.map(item => ({
            label: item.name,
            value: item.name,
          })),
          defaultBathAmount: {
            ...this.state.defaultBathAmount,
            max: bathMaxFromData,
          },
          defaultBedAmount: {
            ...this.state.defaultBedAmount,
            max: bedMaxFromData,
          },
          bedAmount: {
            ...this.state.bedAmount,
            max: bedMaxFromData,
          },
          bathAmount: {
            ...this.state.bathAmount,
            max: bathMaxFromData,
          },
        });
      })
      .catch(() => this.setState({ errorMessage: 'Error: Unable to show list' }));
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
      buildingTypeFilter: Filters.BuildingTypeFilter(this.state.buildingTypesSelected
        .reduce((accumaltorObject, buildingType) => ({
          ...accumaltorObject,
          [buildingType.value]: 1,
        }), {})),
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
            values={this.state.bathAmount}
          />
          <BedAmountSlider
            setValues={this.setBedAmountValues}
            defaultMin={this.state.defaultBedAmount.min}
            defaultMax={this.state.defaultBedAmount.max}
            values={this.state.bedAmount}
          />
        </div>
        <RemineTable properties={filteredProperties} />
      </section>
    );
  }
}

export default Test;
