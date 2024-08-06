import React from 'react';
import PropTypes from 'prop-types';

// Define constants for the styles
const headerRowStyle = { backgroundColor: '#deb5b545' };
const regularRowStyle = { backgroundColor: '#f5f5f5ab' };

const CourseListRow = ({ textFirstCell, textSecondCell, isHeader }) => {
  return (
    <tr style={isHeader ? headerRowStyle : regularRowStyle}>
      <td>{textFirstCell}</td>
      {textSecondCell && <td>{textSecondCell}</td>}
    </tr>
  );
};

CourseListRow.propTypes = {
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
  isHeader: PropTypes.bool
};

CourseListRow.defaultProps = {
  textSecondCell: null,
  isHeader: false
};

export default CourseListRow;
