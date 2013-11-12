# gw2-js-sdk

An AMD JavaScript SDK for interacting with the Guild Wars 2 API. It utilises two
excellent libraries, [reqwest][0] and [lodash][1]. Install it into your project
directly or using [Bower][2], include it as a dependency using a library like
[requirejs][3], and you're ready to start querying the API and building apps. An
example app is included to get you started.

**Note** There is currently no support for the [Tile][5] and [Render][6] services,
as these don't return JSON.

## Promises

Calling an API endpoint, e.g. `gw2.world_names()`, will give you back a `Promise`. This will be resolved or rejected based on whether or not data was successfully retrieved from the API. You can attach callbacks which will execute depending on how the `Promise` resolved. `.then()` is called on success, `.fail()` is called on failure, and `.always()` is called regardless of what happened.

    gw2.world_names().then(function (response) {
      response.forEach(function (world) {
        console.log(world.id, world.name);
      });
    }).fail(function (response) {
      alert('Failed to get world names from the API');
    }).always(function (response) {
      alert('This callback always executes');
    });

[0]: https://github.com/ded/reqwest
[1]: http://lodash.com/
[2]: https://github.com/bower/bower
[3]: http://requirejs.org/
[4]: https://github.com/ded/reqwest#promises
[5]: http://wiki.guildwars2.com/wiki/API:Tile_service
[6]: http://wiki.guildwars2.com/wiki/API:Render_service
