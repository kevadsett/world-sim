require.config({
  baseUrl: "",
  paths: {
  },
  waitSeconds: 15
});

require( ["js/models/world.js", "js/views/world.js"],
  function(WorldModel, WorldView) {
      var worldModel = new WorldModel(64);
      new WorldView(worldModel);
  }
);