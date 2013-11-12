(function() {
  'use strict';

  require.config({
    paths: {
      domReady: 'vendor/requirejs-domready/domReady',
      lodash:   'vendor/lodash/dist/lodash.min',
      reqwest:  'vendor/reqwest/reqwest.min',
      gw2:      'vendor/gw2-js-sdk/gw2.js'
    }
  });

  require(['domReady', 'gw2'], function (domReady, gw2) {

  });

}());
