import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

Photo.propTypes = {
  fixed: PropTypes.node.isRequired,
};

export default function Photo({ fixed, ...restProps }) {
  BASE_CLASS_NAME = ''
  return <Image fixed={fixed} {...restProps} />;
}
