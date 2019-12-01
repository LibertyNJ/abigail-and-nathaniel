// IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
exports.onClientEntry = async () => {
  if (typeof window.IntersectionObserver === 'undefined') {
    await import('intersection-observer');
    console.log('# IntersectionObserver is polyfilled!');
  }
};
