"use strict";
(function () {
    // global game variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    function Init() {
        console.log("Initializing game ...");
        Start();
    }
    function Start() {
        console.log("Starting application ...");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // sets to 60 fps
        createjs.Ticker.on("tick", Update); // call update function every 'tick' (frame)
        Main();
    }
    function Update() {
        stage.update(); // redraws the stage
    }
    function Main() {
        console.log("Game started!");
        helloLabel = new createjs.Text("CreateJS Game", "32px Arial, Helvetica", "#333333");
        helloLabel.x = canvas.width * 0.5;
        helloLabel.y = canvas.height * 0.5;
        stage.addChild(helloLabel);
    }
    onload = Init;
})();
//# sourceMappingURL=game.js.map