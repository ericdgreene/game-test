"use strict";
/// <reference path="_references.ts"/>
(function () {
    // global game variables
    var canvas = document.getElementById("canvas");
    var stage;
    // let helloLabel: createjs.Text;
    var helloLabel;
    // let btnStart: createjs.Bitmap;
    var btnStart;
    var assetManager;
    var assetManifest; // a placeholder for now
    assetManifest = [
        // do whatever you want with this
        // an array of assets (type any)
        {
            id: "btnStart",
            src: "./assets/images/btn-start.png"
        }
    ];
    function Init() {
        console.log("Initializing game ...");
        // now preloads assets
        assetManager = new createjs.LoadQueue(); // creates the asset mgr object
        assetManager.installPlugin(createjs.Sound); // install sound object w/ asset mgr
        assetManager.loadManifest(assetManifest); // load the asset manifest
        assetManager.on("complete", Start); // replaces Start()
        // Start();
    }
    function Start() {
        console.log("Starting application ...");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // turn this on for buttons (leave out if no buttons)
        createjs.Ticker.framerate = 60; // sets to 60 fps
        createjs.Ticker.on("tick", Update); // call update function every 'tick' (frame)
        Main();
    }
    function Update() {
        helloLabel.rotation += 1.44;
        helloLabel.scaleX = 1.125;
        helloLabel.scaleY = 1.125;
        // helloLabel.regX = 3;
        // btnStart.rotation += 1;
        stage.update(); // redraws the stage
    }
    function Main() {
        console.log("Game started!");
        helloLabel = new objects.Label("CreateJS Game", "34px", "Arial", "#da4", 320, 240, true);
        // helloLabel = new createjs.Text(
        //   "CreateJS Game",
        //   "32px Arial, Helvetica",
        //   "#CC6633"
        // );
        // helloLabel.regX = Math.floor(helloLabel.getMeasuredWidth() * 0.5);
        // helloLabel.regY = Math.floor(helloLabel.getMeasuredHeight() * 0.5);
        // console.log(`hl regX: ${helloLabel.regX}, hl regY: ${helloLabel.regY}`);
        // helloLabel.x = canvas.width * 0.5;
        // helloLabel.y = canvas.height * 0.5;
        // console.log(`hl x: ${helloLabel.x}, hl y: ${helloLabel.y}`);
        stage.addChild(helloLabel);
        // btnStart = new createjs.Bitmap("./assets/images/btn-start.png");
        btnStart = new objects.Button(assetManager, "btnStart", 120, 40);
        // btnStart.regX = btnStart.getBounds().width * 0.5;
        // btnStart.regY = btnStart.getBounds().height * 0.5;
        // btnStart.x = 80;
        // btnStart.y = 40;
        stage.addChild(btnStart);
        // btnStart.on("mouseover", btnStartMouseOver);
        // btnStart.on("mouseout", btnStartMouseOut);
        btnStart.on("click", btnStartClick);
    }
    // function btnStartMouseOver(): void {
    //   btnStart.alpha = 0.5;
    // }
    // these are not needed, now that they are part of the Button class.
    // function btnStartMouseOut(): void {
    //   btnStart.alpha = 1.0;
    // }
    function btnStartClick() {
        console.log("button clicked");
        helloLabel.text = "Starting the game!!!";
        helloLabel.regX = Math.floor(helloLabel.getMeasuredWidth() * 0.5);
        helloLabel.regY = Math.floor(helloLabel.getMeasuredHeight() * 0.5);
        console.log("hl regX: " + helloLabel.regX + ", hl regY: " + helloLabel.regY);
        console.log("hl x: " + helloLabel.x + ", hl y: " + helloLabel.y);
        helloLabel.text = helloLabel.text.toUpperCase();
        // helloLabel.rotation += 0;
    }
    onload = Init;
})();
//# sourceMappingURL=game.js.map