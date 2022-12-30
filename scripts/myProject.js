const { LibLabSDK } = require('liblabsdk');
require('dotenv').config();

 async function main() {
    
    const props = {
        token: process.env.API_TOKEN,
      };
    const urlApi = process.env.LIB_LAB_SDK_API;

    let libLabSDK = new LibLabSDK(urlApi, props);

    let result = await libLabSDK.getMovies();

    if (result.success) { console.log(`Succesfully connected to the api:`, result.data);
    } else console.log(`Error while fetching movies:`, result.error);
}

main()

