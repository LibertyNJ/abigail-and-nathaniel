/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
exports.onClientEntry = async () => {
  if (typeof window.IntersectionObserver === 'undefined') {
    await import('intersection-observer');
    console.log('# IntersectionObserver is polyfilled!');
  }
};
