/**
 * Filters an array of locations by the building types given. Makes a function w/ given params
 * and returns it; the returned function does the actual checking
 * @param {obj} buildingTypes Object of building types to filter
 * @returns {function} Returns a func that responds true/false...
 * if specific buildingType exists in obj
 */

export default function BuildingTypeFilter(buildingTypes) {
  return item => Object.keys(buildingTypes).length === 0 || buildingTypes[item.buildingType.name];
}
