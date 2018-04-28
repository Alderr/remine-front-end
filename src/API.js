/* eslint no-underscore-dangle: ["error", { "allow": ["_api"] }] */
import axios from 'axios';

class API {
  constructor() {
    this._api = axios.create({ baseURL: 'http://localhost:8001' });
  }

  getLocations() {
    return this._api.get('locations')
      .then(response => response.data);
  }

  getLocation(id) {
    return this._api.get(`locations/${id}`)
      .then(response => response);
  }

  getBuildingTypes() {
    return this._api.get('buildingtypes')
      .then(response => response);
  }
}

export default new API();
