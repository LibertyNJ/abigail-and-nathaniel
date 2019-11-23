export function getNavigationHeight() {
  const navigation = document.querySelector('#navigation');
  return navigation.offsetHeight;
}

export function reduceClassName(baseClassName, className) {
  return className ? `${baseClassName} ${className}` : baseClassName;
}
