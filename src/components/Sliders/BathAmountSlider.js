import React from 'react';
import PropTypes from 'prop-types';
import { createSliderWithTooltip, Range } from 'rc-slider';

import 'rc-slider/assets/index.css';
import './BathAmountSlider.css';

const RangeSlider = createSliderWithTooltip(Range);

function BathAmountSlider(props) {
  return (
    <section className="bathAmountSlider">
      <h1>Baths</h1>
      <h4>Min:{props.values.min} Max: {props.values.max}</h4>
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

BathAmountSlider.defaultProps = {
  defaultMin: 0,
  defaultMax: 1000,
  setValues: PropTypes.func,
  values: { min: 0, max: 0 },
};

BathAmountSlider.propTypes = {
  defaultMin: PropTypes.number,
  defaultMax: PropTypes.number,
  setValues: PropTypes.func,
  values: PropTypes.objectOf(PropTypes.number),
};

export default BathAmountSlider;
