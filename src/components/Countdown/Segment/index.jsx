import PropTypes from 'prop-types';
import React from 'react';

import { reduceClassName } from '../../../util';

import './style.scss';

Segment.propTypes = {
  children: PropTypes.number.isRequired,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default function Segment({ children, className, label, ...restProps }) {
  return (
    <div className={reduceClassName('text-center', className)} {...restProps}>
      <span className="countdown-segment__number text-primary">{children}</span>
      <br />
      <span className="countdown-segment__label">{label}</span>
    </div>
  );
}
