/**
 * Immutably transfer value from an array to another array
 *
 * @param {array} src
 * @param {array} dest
 * @param {number} start
 * @param {mixed} end
 * @return {Object} {source, destination}
 */
module.exports = function transfer(src, dest, start, end) {
  src = src.slice()
  dest = dest.slice()
  const value = src.splice(start, 1)[0]
  dest.splice(end, 0, value)
  return {source: src, destination: dest}
}