import React from 'react';
import PropTypes from 'prop-types';
import RemineTableItem from './RemineTableItem';
import { List, AutoSizer } from 'react-virtualized';
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
          <AutoSizer>
            {({ height, width }) => {
              console.log(height, width);
              return(
              <List
                height={height}
                width={width}
                rowHeight={100}
                rowCount={props.properties.length}
                rowRenderer={givenProps =>
                (<RemineTableItem
                  {...givenProps}
                  {...props.properties[givenProps.index]}
                />)}
              />
      )}}
          </AutoSizer>
          {/* {props.properties.map(property => (<RemineTableItem key={property.id} {...property} />))} */}
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
