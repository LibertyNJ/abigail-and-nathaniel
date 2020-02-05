import PropTypes from 'prop-types';
import React from 'react';

CopyrightWidget.propTypes = {
  copyrightHolder: PropTypes.string.isRequired,
  initialCopyrightYear: PropTypes.number.isRequired,
};

export default function CopyrightWidget({
  copyrightHolder,
  initialCopyrightYear,
  ...restProps
}) {
  const copyrightYears = getCopyrightYears(initialCopyrightYear);
  return (
    <p {...restProps}>
      <small>
        © {copyrightHolder} {copyrightYears}
      </small>
    </p>
  );
}

function getCopyrightYears(initialCopyrightYear) {
  const currentYear = new Date().getFullYear();
  return currentYear > initialCopyrightYear
    ? `${initialCopyrightYear}–${currentYear}`
    : initialCopyrightYear;
}
