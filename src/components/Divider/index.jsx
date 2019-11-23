import PropTypes from 'prop-types';
import React from 'react';
import { reduceClassName } from '../../util';

Divider.propTypes = {
  className: PropTypes.string,
};

export default function Divider({ className, ...restProps }) {
  return (
    <div
      className={reduceClassName('border-secondary', className)}
      style={{ borderBottomStyle: 'solid', borderBottomWidth: 3 }}
      {...restProps}
    />
  );
}
