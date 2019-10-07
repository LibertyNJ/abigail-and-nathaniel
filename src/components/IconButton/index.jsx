'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
};

export default function IconButton({ children, icon, ...restProps }) {
  return (
    <Button {...restProps}>
      <FontAwesomeIcon icon={icon} />&nbsp;{children}
    </Button>
  );
}
