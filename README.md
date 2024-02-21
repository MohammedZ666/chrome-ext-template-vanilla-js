# chrome-ext-vanilla-js

This is a boilerplate repo for easy chrome extension development using vanilla js and webpack. 


Usage instructions:
1. Install using `npm install` 
2. For development use: `npm run build`
3. For production use: `npm run build`
4. Load the `dist` directory on your chromium based browser to check the extension

The `static` folder contains the `html` and `css` file for the extension popup. The folder also contains the the manifest (v3) necessary for extension development. The `src` directory contains the required javascript files along with the javascript file for the extension popup. To learn more about extension development, please visit the [official documentation.](https://developer.chrome.com/docs/extensions/get-started)