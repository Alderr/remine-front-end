import React from 'react';
import PropTypes from 'prop-types';
import { createSliderWithTooltip, Range } from 'rc-slider';

import 'rc-slider/assets/index.css';
import './BathAmountFilter.css';

const RangeSlider = createSliderWithTooltip(Range);

function BathAmountFilter(props) {
  return (
    <section className="bathAmountFilter">
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
BathAmountFilter.defaultProps = {
  defaultMin: 0,
  defaultMax: 100,
  setValues: PropTypes.func,
};

BathAmountFilter.propTypes = {
  defaultMin: PropTypes.number,
  defaultMax: PropTypes.number,
  setValues: PropTypes.func,
};

export default BathAmountFilter;
