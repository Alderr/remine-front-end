import React from 'react';
import PropTypes from 'prop-types';
import './RemineTable.css';

function RemineTable(props) {
  return (
    <div className="tableContainer">
      <p>Table length: <strong>{props.properties.length}</strong></p>
      <table className="remineTable">
        <thead>
          <tr>
            <th>Address</th>
            <th>Building Type</th>
            <th>Beds</th>
            <th>Baths</th>
          </tr>
        </thead>
        <tbody className="remineTableBody">
          {props.properties.map(property => (
            <tr key={property.id}>
              <td>{property.address}</td>
              <td>{property.buildingType.name}</td>
              <td>{property.beds}</td>
              <td>{property.baths}</td>
            </tr>
            ))}
        </tbody>
      </table>
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
