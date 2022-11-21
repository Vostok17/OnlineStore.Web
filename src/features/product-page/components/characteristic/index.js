import React from 'react';
//import { Col, Row } from 'react-bootstrap';
import './characteristics.css';

const Characteristics = ({ values }) => {
  return (
    <div>
      {values.map((v, index) => {
        const propertyNames = Object.getOwnPropertyNames(v.properties);

        return (
          <div key={index} className="characteristic">
            <h5>{v.kind}</h5>
            <div>
              {propertyNames.map((propName, index) => (
                <div key={index} className="property">
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
