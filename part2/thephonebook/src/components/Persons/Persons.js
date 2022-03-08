import React from 'react';
import PropTypes from 'prop-types';


const Persons = ({filteredPersons}) => (
  <div>
    {filteredPersons.map(person => (<p key={person.name}>{person.name} {person.number}</p>))}
  </div>
);

Persons.propTypes = {};

Persons.defaultProps = {};

export default Persons;
