'use-strict';

import React from 'react';

import CopyrightWidget from '../CopyrightWidget';

export default function Footer({ ...restProps }) {
  return (
    <footer
      className="bg-dark d-flex justify-content-around p-2 text-secondary"
      {...restProps}
    >
      <CopyrightWidget
        className="mb-0"
        copyrightHolder="Abigail Richbourg and Nathaniel J. Liberty"
        initialCopyrightYear={2019}
      />
    </footer>
  );
}
