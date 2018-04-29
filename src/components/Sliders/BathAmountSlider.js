import React from 'react';
import PropTypes from 'prop-types';
import { createSliderWithTooltip, Range } from 'rc-slider';

import 'rc-slider/assets/index.css';
import './BathAmountSlider.css';

const RangeSlider = createSliderWithTooltip(Range);

function BathAmountSlider(props) {
  return (
    <section className="bathAmountSlider">
      <h1> Baths: </h1>
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
  defaultMax: 100,
  setValues: PropTypes.func,
};

BathAmountSlider.propTypes = {
  defaultMin: PropTypes.number,
  defaultMax: PropTypes.number,
  setValues: PropTypes.func,
};

export default BathAmountSlider;
