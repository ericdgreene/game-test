namespace objects {
  export class Label extends createjs.Text {
    // Private Instance Variables

    // Public Properties

    // Constructor
    constructor(
      labelString: string,
      fontSize: string,
      fontFamily: string,
      fontColor: string,
      x: number,
      y: number,
      isCentered: boolean = false
    ) {
      super(labelString, fontSize + " " + fontFamily, fontColor);
      
      if (isCentered){
        this.regX = this.getMeasuredWidth() * 0.5;
        this.regY = this.getMeasuredHeight() * 0.5;
      }
      
      this.x = x;
      this.y = y;
    }

    // Private Methods

    // Public Methods
  }
}
