import BackgroundImage from 'gatsby-background-image';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { reduceClassName } from '../../util';

import './style.scss';

MajorSection.propTypes = {
  backgroundImage: PropTypes.object,
  backgroundOverlay: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  heading: PropTypes.string,
  id: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default function MajorSection({
  backgroundImage,
  backgroundOverlay,
  children,
  className,
  heading,
  id,
  style,
  ...restProps
}) {
  const [
    deviceSupportsBackgroundAttachmentFixed,
    setDeviceSupportsBackgroundAttachmentFixed,
  ] = useState(false);

  useEffect(() => {
    if (
      !window.navigator.userAgent.match(/(iPad|iPhone|iPod|Android|Silk)/gi)
    ) {
      setDeviceSupportsBackgroundAttachmentFixed(true);
    }
  }, []);

  const componentClassName = reduceClassName('section', className);

  return backgroundImage ? (
    <BackgroundImage
      className={componentClassName}
      fluid={[backgroundOverlay, backgroundImage]}
      id={id}
      style={{
        backgroundAttachment: `${
          deviceSupportsBackgroundAttachmentFixed ? 'fixed' : 'scroll'
        }`,
        ...style,
      }}
      Tag="section"
      {...restProps}
    >
      {heading && (
        <header className="d-md-none">
          <h2 className="display-3 text-center">{heading}</h2>
        </header>
      )}
      {children}
    </BackgroundImage>
  ) : (
    <section className={componentClassName} id={id} {...restProps}>
      {heading && (
        <header className="d-md-none">
          <h2 className="display-3 text-center">{heading}</h2>
        </header>
      )}
      {children}
    </section>
  );
}
