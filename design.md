
The SDK is structured in the following way: 

There is a base class LibLabSDKBase with the function APICall to call the final API depending on the method, call, authentification... 

Then there is another layer with the class LibLabSDK that intherits from LibLabSDKBase. Here is where we will define all the functions to call the api endpoints. 