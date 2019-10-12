'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Bold from '../../../../components/Bold';
import IconButton from '../../../../components/IconButton';

Accommodation.propTypes = {
  city: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  websiteAddress: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
};

export default function Accommodation({
  city,
  name,
  state,
  street,
  phoneNumber,
  websiteAddress,
  zip,
  ...restProps
}) {
  const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
  return (
    <section {...restProps}>
      <p>
        <Bold>{name}</Bold> <br />
        {street} <br />
        {city}, {state} {zip} <br />
        {formattedPhoneNumber}
      </p>
      <Row>
        <Col xs={6}>
          <IconButton
            block
            href={websiteAddress}
            icon="globe"
            rel="noopener noreferrer"
            target="_blank"
          >
            Visit&nbsp;website
          </IconButton>
        </Col>
        <Col className="d-md-none" xs={6}>
          <IconButton block href={`tel:+1${phoneNumber}`} icon="phone">
            Call
          </IconButton>
        </Col>
      </Row>
    </section>
  );
}

function formatPhoneNumber(phoneNumber) {
  return phoneNumber.replace(/(^\d\d\d)(\d\d\d)(\d\d\d\d$)/, '($1)$2-$3');
}
