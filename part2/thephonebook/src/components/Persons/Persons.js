import React from 'react';
import PropTypes from 'prop-types';


const Persons = ({filteredPersons, handleDelete}) => (
  <>
    {filteredPersons.map(person => (<div key={person.id}>{person.name} {person.number}  <button onClick={()=>handleDelete(person.id)}>Delete</button></div> ))}
  </>
);

Persons.propTypes = {};

Persons.defaultProps = {};

export default Persons;
