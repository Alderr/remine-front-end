import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import './RemineTableItem.css';

function RemineTableItem(props) {
  return (
    <div className="remineTableItem" key={props.id}>
      <div className="cell">{props.address}</div>
      <div className="cell">{props.buildingType.name}</div>
      <div className="cell">{props.beds}</div>
      <div className="cell">{props.baths}</div>
    </div>
  );
}

RemineTableItem.defaultProps = {
  id: 0,
  address: '',
  buildingType: {},
  beds: 0,
  baths: 0,
};

RemineTableItem.propTypes = {
  id: PropTypes.number,
  address: PropTypes.string,
  buildingType: PropTypes.shape({ id: PropTypes.number, name: PropTypes.string }),
  beds: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  baths: PropTypes.number,
};

export default RemineTableItem;
