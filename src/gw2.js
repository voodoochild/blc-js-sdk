/**
 * https://forum-en.guildwars2.com/forum/community/api/API-Documentation
 * http://wiki.guildwars2.com/wiki/API:Main
 */

define(['lodash', 'reqwest'], function (_, reqwest) {
  'use strict';

  var config = {
    apiRoot: 'https://api.guildwars2.com/v1/',
    lang: 'en'
  };

  /**
   * Empty function to use in callbacks
   */
  function noop() {}

  /**
   * Encode a URL parameter
   * @param {String} value
   * @param {String} key
   */
  function encodeParam (value, key) {
    return key + '=' + encodeURIComponent(value);
  }

  /**
   * Make a call to the API
   * @param {String} endpoint
   * @param {Object} params
   */
  function get (endpoint, params, type) {
    type || (type = 'json');

    return reqwest({
      url: config.apiRoot + endpoint + '.json?' + _.map(params, encodeParam).join('&'),
      type: 'json',
      method: 'get',
      crossOrigin: true
    });
  }

  var blc = {
    /**
     * Override default configuration.
     * @param {Object} opts
     */
    config: function (opts) {
      config = _.extend(config, opts);
    },

    /**
     * Events
     * @param {String} world_id
     * @param {String} event_id
     */
    events: function (world_id, event_id) {
      var params = {};
      world_id || (world_id = false);
      event_id || (event_id = false);

      if (world_id) { params.world_id = world_id; }
      if (event_id) { params.event_id = event_id; }

      return get('events', params);
    },

    /**
     * Event names
     */
    event_names: function() {
      return get('event_names', { lang: config.lang });
    },

    /**
     * Map names
     */
    map_names: function() {
      return get('map_names', { lang: config.lang });
    },

    /**
     * World names
     */
    world_names: function() {
      return get('world_names', { lang: config.lang });
    },

    /**
     * Items
     */
    items: function() {
      return get('items');
    },

    /**
     * Item details
     * @param {String} item_id
     */
    item_details: noop,

    /**
     * Recipes
     */
    recipes: function() {
      return get('recipes');
    },

    /**
     * Recipe details
     * @param {String} recipe_id
     */
    recipe_details: function (recipe_id) {
      return get('recipe_details', { recipe_id: recipe_id });
    },

    /**
     * Guild details
     * @param {String} guild_id
     * @param {String} guild_name
     */
    guild_details: noop,

    /**
     * Continents
     */
    continents: noop, // lang

    /**
     * Maps
     * @param {String} map_id
     */
    maps: noop, // lang

    /**
     * Map floor
     * @param {String} continent_id
     * @param {String} floor
     */
    map_floor: noop,

    /**
     * Build
     */
    build: noop,

    /**
     * Colors
     */
    colors: noop, // lang

    /**
     * Files
     */
    files: noop,

    wvw: {
      /**
       * Matches
       */
      matches: function() {
        return get('matches');
      },

      /**
       * Match details
       * @param {String} match_id
       */
      match_details: function (match_id) {
        return get('match_details', { match_id: match_id });
      },

      /**
       * Objective names
       */
      objective_names: function() {
        return get('objective_names', { lang: config.lang });
      }
    },

    /**
     * Tile
     * @param {String} continent_id
     * @param {String} floor
     * @param {String} z
     * @param {String} x
     * @param {String} y
     */
    tile: noop,

    /**
     * Render
     * @param {String} signature
     * @param {String} file_id
     * @param {String} format
     */
    render: noop
  };

  return blc;
});
