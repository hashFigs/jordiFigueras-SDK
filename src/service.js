const axios = require('axios');
const LibLabSDKBase = require('./base');

class LibLabSDK extends LibLabSDKBase {
  constructor(api, props = {}) {
    super(api, props);
  }
  
 
  /*
   * Get Movies.
   */

  getMovies() {
  return this.apiCall('GET', 'v2/movie', {}, 'userAuth');  
}

}
module.exports = LibLabSDK;