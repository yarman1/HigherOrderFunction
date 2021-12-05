'use strict';

const iterate = (obj, callback) => {
  for (const key in obj) {
    const valueOfKey = obj[key];
    callback(key, valueOfKey, obj);
  }
};

module.exports = { iterate };
