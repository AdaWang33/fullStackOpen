import React from 'react';
import PropTypes from 'prop-types';


const Sum = ({parts}) => (
  <h3> total of {
    parts.reduce(
      (sum,curElement) => sum + curElement.exercises,
      0)} exercises
  </h3>
);

Sum.propTypes = {};

Sum.defaultProps = {};

export default Sum;
