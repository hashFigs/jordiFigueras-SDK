const { log, error, warning, check } = require('./term');
const { LibLabSDK } = require('../src/index');
require('dotenv').config();

const props = {
    token: process.env.API_TOKEN,
  };
let libLabSDK;

class Test {
    /**
     *
     * Init test
     *
     */
    static async init() {
      let result,
        config = {};
      // Setup connection to api.
      const urlApi = process.env.LIB_LAB_SDK_API;
      libLabSDK = new LibLabSDK(urlApi, props);
  
      /*
       * Movies
       *
       * 1 - get movies 
       * 2 - get movie by id
       * 3 - get quote from movie by id
       */
      warning("Starting the test suit")
  
      // 1 - get all movies
      result = await libLabSDK.getMovies();

      if (result.success) { check(`Succesfully connected to the api:`, result);
       } else error(`Error while fetching movies:`, result.error);
      
      if(result.data.total == 8 ) {
        check("test total movies equal to eight PASS");
      } else  {
        error("test total movies FAIL")
        
      }
  
      // 2 - get a movie by id
   
     
    } 
    }

    module.exports = { Test };
