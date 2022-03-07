import React from 'react';
import PropTypes from 'prop-types';
import Content from '../Content/Content';
import Sum from '../Sum/Sum';


const Course = ({course}) => (
  <div>
    <header><h2>{course.name}</h2></header>
    <table>
      <tbody>
        {course.parts.map (part => <Content key={part.id} part={part}/>)}
      </tbody>
    </table>
    <Sum parts={course.parts}/>
  </div>
);

Course.propTypes = {};

Course.defaultProps = {};

export default Course;
