/* eslint no-underscore-dangle: ["error", { "allow": ["_api"] }] */
import axios from 'axios';

class API {
  constructor() {
    this._api = axios.create({ baseURL: 'http://localhost:800' });
  }

  getLocations() {
    return this._api.get('locations')
      .then(response => response.data);
  }

  getLocation(id) {
    return this._api.get(`locations/${id}`)
      .then(response => response.data);
  }

  getBuildingTypes() {
    return this._api.get('buildingtypes')
      .then(response => response.data);
  }
}

export default new API();
