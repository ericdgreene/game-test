namespace objects {
  export class Button extends createjs.Bitmap {
    // Private instance variables
    // Public properties
    // Constructor
    constructor(imagePath: string, x: number = 0, y: number = 0) {
      super(imagePath);

      this.x = x;
      this.y = y;

      this.on("mouseover", this._mouseOver); // private method
      this.on("mouseout", this._mouseOut); // private method
    }

    // Private methods
    private _mouseOver(): void {
      this.alpha = 0.5;
    }
    private _mouseOut(): void {
      this.alpha = 1.0;
    }

    // Public methods
  }
}
