const { fromJS } = require('immutable');

/**
 * Converts a given object into an immutable Map using fromJS of Immutable.js.
 * @param {Object} obj - The object to convert.
 * @returns {Map} - The immutable Map representation of the object.
 */
function getImmutableObject(obj) {
  return fromJS(obj);
}

module.exports = { getImmutableObject };
