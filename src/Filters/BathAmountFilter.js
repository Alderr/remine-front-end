/**
 * Filters an array of locations by the bath amount ranges given
 * @param {number} min The minimum amount of baths
 * @param {number} max The maximum amount of baths
 * @returns {function} Returns a func that responds true/false if baths is between min/max
 */
export default function BathAmountFilter(min, max) {
  return item => item.baths >= min && item.baths <= max;
}
