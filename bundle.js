(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var url = "https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=";
      var NewsApi2 = class {
        constructor(api_key) {
          this.api_key = api_key;
        }
        loadNotes(callback) {
          fetch(url + this.api_key).then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = NewsApi2;
    }
  });

  // env-ns:/Users/mateuszdiak/Documents/Projects/week7/news-summary-challenge/.env
  var GUARDIAN_API_KEY = "3f49f4ec-c2c2-4c24-bc6c-9646a0d9855d";

  // index.js
  var NewsApi = require_newsApi();
  var api = new NewsApi(GUARDIAN_API_KEY);
  api.loadNotes(console.log);
})();
