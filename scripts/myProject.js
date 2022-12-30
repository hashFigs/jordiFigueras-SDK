const  { LibLabSDK }  = require('../src/index.js');
require('dotenv').config();

 async function main() {
    
    const props = {
        token: 'HleU0mrH4Ayy-fvXSvJ3',
      };
    const urlApi = process.env.LibLabSDK_API;

    let libLabSDK = new LibLabSDK(urlApi, props);

    let result = await libLabSDK.getMovies();

    if (result.success) { console.log(`Succesfully connected to the api:`, result.data);
    } else console.log(`Error while fetching movies:`, result.error);
}

main()

