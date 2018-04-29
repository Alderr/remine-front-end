/**
 * Filters an array of locations by the beds amount ranges given. Makes a function w/ given params
 * and returns it; the returned function does the actual checking
 * @param {number} min The minimum amount of beds
 * @param {number} max The maximum amount of beds
 * @returns {function} Returns a func that responds true/false if beds is between min/max
 */
export default function BedAmountFilter(min, max) {
  return item => item.beds >= min && item.beds <= max;
}
