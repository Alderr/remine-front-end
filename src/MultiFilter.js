/**
 * Filters an array of items with an object of filter functions
 * @param {array} arr Array of items. Items are objects.
 * @param {object} filters An object with filter functions,
 */
export default function MultiFilter(arr, filters) {
  const filterKeys = Object.keys(filters);
  return arr.filter(item => filterKeys.every(key => filters[key](item)));
}

