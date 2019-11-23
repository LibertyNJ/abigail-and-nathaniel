import PropTypes from 'prop-types';
import React from 'react';
import { reduceClassName } from '../../util';

EmbeddedMap.propTypes = {
  fallback: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const WRAPPER_BASE_CLASS_NAME = 'embed-responsive embed-responsive-4by3';

export default function EmbeddedMap({
  fallback,
  src,
  title,
  wrapperClassName,
  ...restProps
}) {
  return (
    <div className={reduceClassName(WRAPPER_BASE_CLASS_NAME, wrapperClassName)}>
      <iframe src={src} title={title} {...restProps}>
        <p>
          This map cannot be shown because your browser does not support{' '}
          <code>&lt;iframe&gt;</code> HTML elements.
        </p>
        {fallback}
      </iframe>
    </div>
  );
}
