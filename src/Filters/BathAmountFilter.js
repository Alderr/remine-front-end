/**
 * Filters an array of locations by the bath amount ranges given. Makes a function w/ given params
 * and returns it; the returned function does the actual checking
 * @param {number} min The minimum amount of baths
 * @param {number} max The maximum amount of baths
 * @returns {function} Returns a func that responds true/false if baths is between min/max
 */
export default function BathAmountFilter(min, max) {
  return item => item.baths >= min && item.baths <= max;
}
