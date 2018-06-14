/// <reference path="_references.ts"/>

(function() {
  // global game variables
  let canvas: any = document.getElementById("canvas");
  let stage: createjs.Stage;
  let helloLabel: createjs.Text;
  // let btnStart: createjs.Bitmap;
  let btnStart: objects.Button;

  function Init(): void {
    console.log("Initializing game ...");
    Start();
  }

  function Start(): void {
    console.log("Starting application ...");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // turn this on for buttons (leave out if no buttons)

    createjs.Ticker.framerate = 60; // sets to 60 fps
    createjs.Ticker.on("tick", Update); // call update function every 'tick' (frame)
    Main();
  }

  function Update(): void {
    helloLabel.rotation += 1.44;
    helloLabel.scaleX = 1.5;
    helloLabel.scaleY = 1.5;
    // helloLabel.regX = 3;
    // btnStart.rotation += 1;
    stage.update(); // redraws the stage
  }

  function Main(): void {
    console.log("Game started!");

    helloLabel = new createjs.Text(
      "CreateJS Game",
      "32px Arial, Helvetica",
      "#CC6633"
    );

    helloLabel.regX = Math.floor(helloLabel.getMeasuredWidth() * 0.5);
    helloLabel.regY = Math.floor(helloLabel.getMeasuredHeight() * 0.5);
    console.log(`hl regX: ${helloLabel.regX}, hl regY: ${helloLabel.regY}`);

    helloLabel.x = canvas.width * 0.5;
    helloLabel.y = canvas.height * 0.5;

    console.log(`hl x: ${helloLabel.x}, hl y: ${helloLabel.y}`);

    stage.addChild(helloLabel);

    // btnStart = new createjs.Bitmap("./assets/images/btn-start.png");
    btnStart = new objects.Button("./assets/images/btn-start.png", 10, 10);
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

  function btnStartClick(): void {
    console.log("button clicked");
    helloLabel.text = "Starting the game!!!";
    helloLabel.regX = Math.floor(helloLabel.getMeasuredWidth() * 0.5);
    helloLabel.regY = Math.floor(helloLabel.getMeasuredHeight() * 0.5);
    console.log(`hl regX: ${helloLabel.regX}, hl regY: ${helloLabel.regY}`);
    console.log(`hl x: ${helloLabel.x}, hl y: ${helloLabel.y}`);
    helloLabel.text = helloLabel.text.toUpperCase();
    // helloLabel.rotation += 0;
  }

  onload = Init;
})();
