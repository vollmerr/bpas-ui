import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Fields from './Fields';

/** Wrapper for Fields */
function Section({
  container,
  ...props,
}) {
  return(
    <Row>
      <Col {...container}>
        <Fields {...props} />
      </Col>
    </Row>
  );
}

Section.propTypes = {
  width: PropTypes.any,
};

export default Section;
