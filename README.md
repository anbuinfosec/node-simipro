# Node-SimSimi
<p align="center">
  <img alt="@node-simsimi" style="width: 150px;" src="https://cdn.discordapp.com/attachments/858321432178196490/1055677997694320700/ei_1671763615054-removebg-preview.png">
</p>
<div align="center">
  <h3>Node-SimSimi</h3>
  <p>Unofficial <a href="https://simsimi.com">SimSimi</a> API <a href="https://nodejs.org">NodeJS</a><br>It's Free!</p>
</div>
<div align="center">
  <a href="https://www.npmjs.com/package/node-simsimi">NPM</a> | <a href="https://github.com/anbuinfosec/node-simi">Repository</a> | <a href="https://dsc.gg/DrelezTM">Report Bug</a> | <a href="https://github.com/anbuinfosec/node-simi/issues">Issues</a>
</div>

## Installation 📑
* Install Modules
  ```sh
  npm i node-simsimi
  ```
 
 ## How to Use 🔭
 * With Asynchronous
   * ESModule
    ```js
    import simSimi from 'node-simsimi';
   
    async function main(message, language) {
      const response = await simSimi(message, language);
      console.log(response);
    }
   
    main("Hii Simi!", "en");
    ```
   * CommonJS
    ```js
    const simSimi = require('node-simsimi');
   
    async function main(message, language) {
      const response = await simSimi(message, language);
      console.log(response);
    }
   
    main("Hii Simi!", "en");
    ```
  
 * Without Asynchronous
   * ESModule
    ```js
    import simSimi from 'node-simsimi';

    function main(message, language) {
      simSimi(message, language).then((response) => {
        console.log(response);
      });
    }
   
    main("Hii Simi!", "en");
    ```
   * CommonJS
    ```js
    const simSimi = require('node-simsimi');

    function main(message, language) {
      simSimi(message, language).then((response) => {
        console.log(response);
      });
    }
   
    main("Hii Simi!", "en");
    ```

## Language 🏳
* Language Support:
  * id : Indonesian
  * en : English
  * vn : Vietnamese
  * ph : Filipino
  * zh : Chinese
  * ch : Chamorro / Guam
  * ru : Russian
  * ko : Korean
  * ar : Arabic
  * ms : Malay
  * fr : French
  * ja : Japanese
  * es : Spanish
  * de : German
  * pt : Portuguese
  * ml : Malayalam
  * si : Sinhala
  * tr : Turkish
* ⚠ Does not support other than languages/ISO 639-1 above


## Response 📨
* Example Response
  ```js
  {
    status: true,
    message: 'Hi',
    response: 'Hallo',
    language: 'id',
  }
  ```

## Built With 🛠
* [Axios](https://axios-http.com/docs/intro)

## Error or Bug 🐞
* [Discord](https://dsc.gg/DrelezTM)
* [YouTube](https://www.youtube.com/p/DrelezTM)
* [Instagram](https://www.instagram.com/DrelezTM)
* [Issues](https://github.com/DrelezTM/StickerWhatsAppBOT/issues)

## License 📜
* [License](https://github.com/anbuinfosec/node-simi/blob/main/LICENSE)
