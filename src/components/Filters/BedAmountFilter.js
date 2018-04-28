import React from 'react';
import PropTypes from 'prop-types';
import { createSliderWithTooltip, Range } from 'rc-slider';

import 'rc-slider/assets/index.css';
import './BedAmountFilter.css';

const RangeSlider = createSliderWithTooltip(Range);

function BedAmountFilter(props) {
  return (
    <section className="bedAmountFilter">
      <RangeSlider
        onAfterChange={props.setValues}
        min={props.defaultMin}
        max={props.defaultMax}
        defaultValue={[props.defaultMin, props.defaultMax]}
        tipFormatter={value => `${value}`}
      />
    </section>
  );
}
BedAmountFilter.defaultProps = {
  defaultMin: 0,
  defaultMax: 100,
  setValues: PropTypes.func,
};

BedAmountFilter.propTypes = {
  defaultMin: PropTypes.number,
  defaultMax: PropTypes.number,
  setValues: PropTypes.func,
};

export default BedAmountFilter;
