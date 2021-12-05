'use strict';

const contract = (fn, ...types) => (...args) => {
  for (const key in args) {
    const type = types[key].name.toLowerCase();
    const argType = typeof args[key];
    if (argType !== type) throw new Error('TypeError');
  }
  const res =  fn(...args);
  const resType = types[types.length - 1].name.toLowerCase();
  if (typeof res !== resType) throw new Error('TypeError');
  return res;
};

module.exports = { contract };
