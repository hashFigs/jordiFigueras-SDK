## How to install 
To install the SDK to your project you can install it by using the following command in your project folder

```bash
npm install liblabsdk 
```
or
```bash
yarn add liblabsdk
```
## How to use 

Please see a full example of how to use this SDK at scripts/myProject.js

```javascript
const props = {
        token: process.env.API_TOKEN,
      };
    const urlApi = process.env.LibLabSDK_API;

    let libLabSDK = new LibLabSDK(urlApi, props);

    let result = await libLabSDK.getMovies();

```

## How to test the SDK

```javascript
node scripts/test.js
```
