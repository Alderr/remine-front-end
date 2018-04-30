import React from 'react';
import PropTypes from 'prop-types';
import './RemineTableItem.css';

function RemineTableItem(props) {
  return (
    <div style={props.style} className="remineTableItem">
      <div className="cell-item">{props.address}</div>
      <div className="cell-item">{props.buildingType.name}</div>
      <div className="cell-item">{props.beds}</div>
      <div className="cell-item">{props.baths}</div>
    </div>
  );
}

RemineTableItem.defaultProps = {
  address: '',
  buildingType: {},
  beds: 0,
  baths: 0,
  style: null,
};

RemineTableItem.propTypes = {
  address: PropTypes.string,
  buildingType: PropTypes.shape({ id: PropTypes.number, name: PropTypes.string }),
  beds: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  baths: PropTypes.number,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
};

export default RemineTableItem;
