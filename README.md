# node-simipro
<p align="center">
  <img alt="@node-simipro" style="width: 150px;" src="https://cdn.discordapp.com/attachments/858321432178196490/1055677997694320700/ei_1671763615054-removebg-preview.png">
</p>
<div align="center">
  <h3>node-simipro</h3>
  <p>Unofficial <a href="https://simsimi.com">SimSimi</a> API <a href="https://nodejs.org">NodeJS</a><br>It's Free!</p>
</div>
<div align="center">
  <a href="https://www.npmjs.com/package/node-simipro">NPM</a> | <a href="https://github.com/anbuinfosec/node-simipro">Repository</a> | <a href="https://dsc.gg/DrelezTM">Report Bug</a> | <a href="https://github.com/anbuinfosec/node-simipro/issues">Issues</a>
</div>

## Installation 📑
* Install Modules
  ```sh
  npm i node-simipro
  ```
 
 ## How to Use 🔭
 * With Asynchronous
   * ESModule
    ```js
    import simi from 'node-simipro';
  
    async function talk() {
      const res = await simi.simitalk ("4v3pm1KkchRGTTxAILoE", "bro what hepen?", "bn");
      console.log (res)
    }

    async function teach() {
      const res = await simi.simiteach ("4v3pm1KkchRGTTxAILoE", "bro what hepen?", "ntg hepen bruh!", "bn");
      console.log (res)
    }

    talk ()
    teach ()
    ```
   * CommonJS
    ```js
    const simi = require('node-simipro');
   
    async function talk() {
      const res = await simi.simitalk ("4v3pm1KkchRGTTxAILoE", "bro what hepen?", "bn");
      console.log (res)
    }

    async function teach() {
      const res = await simi.simiteach ("4v3pm1KkchRGTTxAILoE", "bro what hepen?", "ntg hepen bruh!", "bn");
      console.log (res)
    }

    talk ()
    teach ()
    ```
  
 * Without Asynchronous
   * ESModule
    ```js
    import simitalk from 'node-simipro';

    function talk() {
      simi.simitalk ("4v3pm1KkchRGTTxAILoE", "bro what hepen?", "bn").then((response) => {
        console.log(response);
      });
    }

    function teach() {
      simi.simiteach ("4v3pm1KkchRGTTxAILoE", "bro what hepen?", "ntg hepen bruh!", "bn").then((response) => {
        console.log(response);
      });
    }

    talk ()
    teach ()
    ```
   * CommonJS
    ```js
    const simitalk = require('node-simipro');

    function talk() {
      simi.simitalk ("4v3pm1KkchRGTTxAILoE", "bro what hepen?", "bn").then((response) => {
        console.log(response);
      });
    }

    function teach() {
      simi.simiteach ("4v3pm1KkchRGTTxAILoE", "bro what hepen?", "ntg hepen bruh!", "bn").then((response) => {
        console.log(response);
      });
    }

    talk ()
    teach ()
    ```
    
## Response 📨
* Example Response simitalk
  ```json
  {
    "status": true,
    "message": "ohh. bhai big boss evan kon bhai",
    "author": "https://facebook.com/anbuinfosec"
  }
  ```
* Example response simiteach
  ```json
  {
    "status": true,
    "message": "SimSimi just learned 1th answer to the question \"who is anbuinfosec?\""
  }
  ```

## Built With 🛠
* [Axios](https://axios-http.com/docs/intro)

## Error or Bug 🐞
* [Facebook](https://facebook.com/anbuinfosec)
* [YouTube](https://www.youtube.com/akxvau)
* [Instagram](https://www.instagram.com/anbuinfosec)
* [Issues](https://github.com/anbuinfosec/node-simipro/issues)

## License 📜
* [License](https://github.com/anbuinfosec/node-simipro/blob/main/LICENSE)
