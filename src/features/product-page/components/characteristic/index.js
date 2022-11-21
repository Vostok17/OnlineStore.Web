import React from 'react';
//import { Col, Row } from 'react-bootstrap';
import './characteristics.css';

const Characteristics = ({ values }) => {
  return (
    <div>
      {values.map(v => {
        const propertyNames = Object.getOwnPropertyNames(v.properties);

        return (
          <div className="characteristic">
            <h5>{v.kind}</h5>
            <div>
              {propertyNames.map(propName => (
                <div className="property">
                  <div>{propName}</div>
                  <div>{v.properties[propName]}</div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Characteristics;
