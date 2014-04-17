require.config({
  baseUrl: "",
  paths: {
  },
  waitSeconds: 15
});

require( ["js/models/world.js", "js/views/world.js", "js/models/camera.js"],
  function(WorldModel, WorldView, Camera) {
      var worldModel = new WorldModel(128);
      new Camera(800, 600, {rotation:Math.PI});
      new WorldView(worldModel);
  }
);