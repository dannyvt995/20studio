//cache.js

import { memo } from 'react';

const componentCache = {};

export const cacheComponent = (component) => {
  const componentName = component.displayName || component.name;
  if (!componentCache[componentName]) {
    componentCache[componentName] = memo(component);
  }
  return componentCache[componentName];
};

export const cacheAllComponents = (components) => {
  const cachedComponents = {};
  Object.keys(components).forEach((key) => {
    cachedComponents[key] = cacheComponent(components[key]);
  });
  return cachedComponents;
};
