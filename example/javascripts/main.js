(function() {
  'use strict';

  require.config({
    paths: {
      domReady: 'vendor/requirejs-domready/domReady',
      lodash:   'vendor/lodash/dist/lodash.min',
      reqwest:  'vendor/reqwest/reqwest.min'
    }
  });

  require(['domReady', 'blc'], function (domReady, blc) {
    var examples = (function() {

      function init() {
        blc.world_names().then(function (response) {
          console.log(response);
        });
      }

      return {
        init: init
      };
    }());

    domReady(examples.init);
  });

}());
