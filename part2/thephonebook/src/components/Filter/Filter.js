import React from 'react';
import PropTypes from 'prop-types';


const Filter = ({keyword, handleFilter}) => (
  <div>
  filter shown with: <input value={keyword} onChange={handleFilter}></input>
</div>
);

Filter.propTypes = {};

Filter.defaultProps = {};

export default Filter;
