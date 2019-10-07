'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import { reduceClassName } from '../../util';

Bold.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default function Bold({ children, className}) {
  return (
    <span className={reduceClassName('font-weight-bold', className)}>
      {children}
    </span>
  );
}
