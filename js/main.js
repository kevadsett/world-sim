require.config({
  	baseUrl: "",
  	paths: {
  	},
  	waitSeconds: 15
});

require( [
	"js/models/world.js", 
	"js/views/world.js", 
	"js/controllers/camera.js", 
	"js/controllers/userinput.js",
	"js/libs/minivents"
	],
  	function(WorldModel, WorldView, Camera, UserInput, Events) {
      	window.worldEvents = new Events();
      	var worldModel = new WorldModel();
      	new Camera({width:800, height:600, rotation:Math.PI});
      	new UserInput();
      	new WorldView(worldModel);
  	}
);