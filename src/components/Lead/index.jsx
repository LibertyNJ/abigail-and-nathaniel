'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import { reduceClassName } from '../../util';

Lead.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default function Lead({ children, className, id }) {
  return (
    <p className={reduceClassName('lead', className)} id={id}>
      {children}
    </p>
  );
}
