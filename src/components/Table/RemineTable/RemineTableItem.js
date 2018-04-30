import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import './RemineTableItem.css';

function RemineTableItem(props) {
  return (
    <tr key={props.id}>
      <td>{props.address}</td>
      <td>{props.buildingType.name}</td>
      <td>{props.beds}</td>
      <td>{props.baths}</td>
    </tr>

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
