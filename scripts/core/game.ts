(function() {
  // global game variables
  let canvas: any = document.getElementById("canvas");
  let stage: createjs.Stage;
  let helloLabel: createjs.Text;
  let btnStart: createjs.Bitmap;

  function Init(): void {
    console.log("Initializing game ...");
    Start();
  }

  function Start(): void {
    console.log("Starting application ...");
    stage = new createjs.Stage(canvas);
    createjs.Ticker.framerate = 60; // sets to 60 fps
    createjs.Ticker.on("tick", Update); // call update function every 'tick' (frame)
    Main();
  }

  function Update(): void {
    helloLabel.rotation += 1.44;
    helloLabel.scaleX = 1.5;
    helloLabel.scaleY = 1.5;
    // helloLabel.regX = 3;
    stage.update(); // redraws the stage
  }

  function Main(): void {
    console.log("Game started!");

    helloLabel = new createjs.Text(
      "CreateJS Game",
      "32px Arial, Helvetica",
      "#CC6633"
    );

    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
    helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;

    helloLabel.x = canvas.width * 0.5;
    helloLabel.y = canvas.height * 0.5;

    stage.addChild(helloLabel);
  }

  onload = Init;
})();
