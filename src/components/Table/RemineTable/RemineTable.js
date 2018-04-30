import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import RemineTableItem from './RemineTableItem';

import './RemineTable.css';

function RemineTable(props) {
  return (
    <div className="tableContainer">
      <p>Table length: <strong>{props.properties.length}</strong></p>
      <div className="remineTable">
        <div className="remineTableHead">
          <div className="cell">Address</div>
          <div className="cell">Building Type</div>
          <div className="cell">Beds</div>
          <div className="cell">Baths</div>
        </div>
        <div className="remineTableBody">
          {props.properties.map(property => (<RemineTableItem key={property.id} {...property} />))}
        </div>
      </div>

    </div>
  );
}

RemineTable.defaultProps = {
  properties: [],
};

RemineTable.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.object),
};

export default RemineTable;

{ /* <tr key={property.id}>
<td>{property.address}</td>
<td>{property.buildingType.name}</td>
<td>{property.beds}</td>
<td>{property.baths}</td>
</tr> */ }
