import React from 'react';
import PropTypes from 'prop-types';
import { createSliderWithTooltip, Range } from 'rc-slider';

import 'rc-slider/assets/index.css';
import './BedAmountSlider.css';

const RangeSlider = createSliderWithTooltip(Range);

function BedAmountSlider(props) {
  return (
    <section className="bedAmountSlider">
      <h1> Beds: </h1>
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
BedAmountSlider.defaultProps = {
  defaultMin: 0,
  defaultMax: 100,
  setValues: PropTypes.func,
};

BedAmountSlider.propTypes = {
  defaultMin: PropTypes.number,
  defaultMax: PropTypes.number,
  setValues: PropTypes.func,
};

export default BedAmountSlider;
