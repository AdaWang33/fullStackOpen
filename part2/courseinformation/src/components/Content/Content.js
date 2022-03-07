import React from 'react';
import PropTypes from 'prop-types';


const Content = ({part}) => (
  <tr>
    <td>{part.name}</td>
    <td>{part.exercises}</td>
  </tr>
);

Content.propTypes = {};

Content.defaultProps = {};

export default Content;
