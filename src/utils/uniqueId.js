const counter = {}

/**
 * Returns a unique ID
 * @param {String} namespace - Namespace of the unique ID
 * @returns {String} - Unique ID
 */
module.exports = (namespace = "mom-component") => {
  if (namespace in counter) {
    counter[namespace]++
  } else {
    counter[namespace] = 0
  }

  return `${namespace}--${counter[namespace]}`
}
