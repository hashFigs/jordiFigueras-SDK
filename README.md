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
first you will neeed to include the following fields to your .env
 ```javascript
 API_TOKEN="your api key"
 LIB_LAB_SDK_API=https://the-one-api.dev/
```
Then you can start enjoying this awesome SDK by :

first importing the module:
```javascript
const { LibLabSDK } = require('liblabsdk');
```
and then 

```javascript
const props = {
    token: process.env.API_TOKEN,
    };
const urlApi = process.env.LIB_LAB_SDK_API;

let libLabSDK = new LibLabSDK(urlApi, props);

let result = await libLabSDK.getMovies();

```
For a full example, please check scripts/myProject.js

## How to test the SDK

```javascript
node scripts/test
```
