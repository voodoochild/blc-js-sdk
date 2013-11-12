/**
 * https://forum-en.guildwars2.com/forum/community/api/API-Documentation
 * http://wiki.guildwars2.com/wiki/API:Main
 */

/**
 * TODO:
 *   - make all endpoints functional
 *   - write an example for each endpoint
 *   - could parameters be handled more succinctly?
 */

define(['lodash', 'reqwest'], function(_, reqwest) {
  'use strict';

  var config = {
    apiRoot: 'https://api.guildwars2.com/v1/',
    lang: 'en'
  };

  function noop() {}

  function encodeParam (value, key) {
    return key + '=' + encodeURIComponent(value);
  }

  function get (endpoint, params) {
    return reqwest({
      url: config.apiRoot + endpoint + '.json?' + _.map(params, encodeParam).join('&'),
      type: 'json',
      method: 'get',
      crossOrigin: true
    });
  }

  var blc = {
    config: function (opts) {
      config = _.extend(config, opts);
    },

    events: function (world_id, event_id) {
      var params = {};
      world_id || (world_id = false);
      event_id || (event_id = false);

      if (world_id) { params.world_id = world_id; }
      if (event_id) { params.event_id = event_id; }

      return get('events', params);
    },

    event_names: function() {
      return get('event_names', { lang: config.lang });
    },

    map_names: function() {
      return get('map_names', { lang: config.lang });
    },

    world_names: function() {
      return get('world_names', { lang: config.lang });
    },

    items: function() {
      return get('items');
    },

    item_details: noop, // item_id

    recipes: function() {
      return get('recipes');
    },

    recipe_details: function (recipe_id) {
      return get('recipe_details', { recipe_id: recipe_id });
    },

    guild_details: noop, // guild_id, guild_name

    continents: noop, // lang

    maps: noop, // lang, map_id

    map_floor: noop, // continent_id, floor

    build: noop,

    colors: noop, // lang

    files: noop,

    wvw: {
      matches: function() {
        return get('matches');
      },

      match_details: function (match_id) {
        return get('match_details', { match_id: match_id });
      },

      objective_names: function() {
        return get('objective_names', { lang: config.lang });
      }
    },

    tile: noop, // continent_id, floor, z, x, y

    render: noop // signature, file_id, format
  };

  return blc;
});
