// polyfill until we can upgrade to vue 3.5
export const useId = (prefix = 'id') => {
  const id = Math.random().toString(36).substring(2, 11);
  return `${prefix}-${id}`;
};