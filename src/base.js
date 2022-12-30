const axios = require('axios');
const chalk = require('chalk');


const log = console.log;

class LibLabSDKBase {
  constructor(api, props = {}) {
    this.api = api;
    this.token = props.token || false;
    this.debug = props.debug || true;
    this.responseType = props.responseType || 'detailed';
  }

   /*
   * liblab Log
   */
   libLabLog(msg) {
    if (this.debug) log(chalk.blue('Log'), msg);
  }

  /*
   * liblab Error
   */
  libLabError(msg) {
    if (this.debug) log(chalk.red('Error'), msg);
  }

  /*
   * Validate input parameters
   */
  validate(params, auth) {
    return new Promise((resolve, reject) => {
      if (auth === 'userAuth' && this.token === false) {
        reject(new Error('You are not authorized. Login First.'));
      } 
      resolve(params);
    });

}

  /*
   * Call the API
   *
   * @param {string} method Method : get, post, put, delete
   * @param {object} params Parameters to be used to call.
   */
  apiCall(method, call, params = {}, auth = 'noAuth') {
    return new Promise((resolve) => {
      this.validate(params, auth)
        .then((params) => {
          let config = {};
          if (auth !== 'noAuth') { 
              config=  
              auth === 'userAuth'
                ? { headers: { Authorization: `Bearer ${this.token}` } }
                : { headers: { Authorization: `Bearer ${this.token}` } };
            
          }
          switch (method) {
            case 'POST':
              return axios.post(`${this.api}${call}`, params, config);
            case 'PUT':
              return axios.put(`${this.api}${call}`, params, config);
            case 'GET':
              return axios.get(`${this.api}${call}`, config);
          }
        })
        .then((res) => {
          this.libLabLog(`${method} ${call} => Success`);
          if (this.responseType === 'basic') resolve(res.data);
          else resolve({ success: true, data: res.data, error: null });
        })
        .catch((e) => {
          const error =
            e.response && e.response.data && e.response.data.error
              ? e.response.data.error
              : e.message;
          const code =
            e.response && e.response.data && e.response.data.code
              ? e.response.data.code
              : e.message;
          this.libLabError(`${method} ${call} => ${error}`);
          if (this.responseType === 'basic') resolve(false);
          else
            resolve({
              success: false,
              data: null,
              error,
              code,
            });
        });
    });
  }




}

module.exports = LibLabSDKBase;
