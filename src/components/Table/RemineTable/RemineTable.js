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
          <h3>Address</h3>
          <h3>Building Type</h3>
          <h3>Beds</h3>
          <h3>Baths</h3>
        </div>

        {/* <div className="remineTableBody">
            {props.properties.map(property => (<RemineTableItem key={property.id} {...property} />))}
          </div> */}
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
