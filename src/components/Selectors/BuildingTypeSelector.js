import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import './BuildingTypeSelector.css';

function BuildingTypeSelector(props) {
  return (
    <section className="buildingTypeSelector">
      <h1> Building Type: </h1>
      <Select
        name="buildingTypeSelect"
        placeholder="Select A Building Type!"
        multi
        value={props.selectorValue}
        onChange={props.changeSelectorValue}
        options={props.buildingTypeOptions}
      />
    </section>
  );
}

BuildingTypeSelector.defaultProps = {
  buildingTypeOptions: [{ value: 'All', label: 'All' }],
  changeSelectorValue: () => {},
  selectorValue: null,
};

BuildingTypeSelector.propTypes = {
  buildingTypeOptions: PropTypes.arrayOf(PropTypes.object),
  changeSelectorValue: PropTypes.func,
  selectorValue: PropTypes.arrayOf(PropTypes.object),
};

export default BuildingTypeSelector;
