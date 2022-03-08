import React from 'react';
import PropTypes from 'prop-types';



const PersonForm = ({newName, newNum, handleSubmit, handleOnNameChange, handleOnNumChange}) => (
  <div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleOnNameChange}/>
        </div>
        <div>number: <input value={newNum} onChange={handleOnNumChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>      
  </div>
);

PersonForm.propTypes = {};

PersonForm.defaultProps = {};

export default PersonForm;
