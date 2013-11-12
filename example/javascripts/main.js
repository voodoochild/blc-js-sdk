(function() {
  'use strict';

  require.config({
    paths: {
      domReady: 'vendor/requirejs-domready/domReady',
      lodash:   'vendor/lodash/dist/lodash.min',
      reqwest:  'vendor/reqwest/reqwest.min',
      gw2:      'vendor/gw2-js-sdk/gw2'
    }
  });

  require(['domReady', 'gw2'], function (domReady, gw2) {

    gw2.world_names().then(function (response) {
      response.forEach(function (world) {
        console.log(world.id, world.name);
      });
    });

  });

}());
