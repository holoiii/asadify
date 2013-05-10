var Asadify = {
  me: function() {
    console.log("Initializing!");

    this.rebuildAsad();
  },
  asad: null,
  createAsad: function() {
    console.log("Creating Asad!");

    this.asad = $("<div class='cool-asad'></div>");
    this.placeAsad();
    this.drawAsad();

    $("body").append(this.asad);
  },
  destroyAsad: function() {
    if(this.asad != undefined) {
      this.asad.remove();
      delete this.asad;
    }
  },
  placeAsad: function() {
    var currentPosition = this.position;
    var possiblePositions = [0, 1, 2, 3];
    var index = possiblePositions.indexOf(currentPosition);
    if(index != -1) {
      possiblePositions.splice(index, 1);
    }
    var position = possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
    this.position = position; //0-1-2-3, 0 is top, clockwise
  },
  drawAsad: function() {
    var asad = this.asad;
    asad.css("width", 84);
    asad.css("height", 138);
    asad.css("z-index", 9999);
    asad.css("background-image", "url('/assets/asad-final-scaled.png')");
    asad.css("position", "fixed");
    var rotate;
    switch(this.position) {
      case 0:
        asad.css("top", -73);
        asad.css("right", 50);
        rotate = 180;
        break;
      case 1:
        asad.css("right", -50);
        asad.css("bottom", 50);
        rotate = -90;
        break;
      case 2:
        asad.css("bottom", -78);
        asad.css("left", 50);
        rotate = 0;
        break;
      case 3:
        asad.css("top", 50);
        asad.css("left", -50);
        rotate = 90;
        break;
    }

    asad.css("transform", "rotate(" + rotate + "deg)");
    asad.css("-ms-transform", "rotate(" + rotate + "deg)");
    asad.css("-webkit-transform", "rotate(" + rotate + "deg)");
  },
  giveAsadBehavior: function() {
    console.log("Giving Asad Behavior!");

    var that = this;
    this.asad.hover(function(e) {
      that.animateAsad(function() {
        //sleep some time, wait random seconds after mouse stops moving then rebuild
        that.rebuildAsad();
      });
    })
  },
  animateAsad: function(callback) {
    console.log("Animating Asad!");

    var that = this;
    var asad = this.asad;
    switch(this.position) {
      case 0:
        asad.animate({top: '-134px'}, 400, 'linear', callback);
        break;
      case 1:
        asad.animate({right: '-107px'}, 400, 'linear', callback);
        break;
      case 2:
        asad.animate({bottom: '-134px'}, 400, 'linear', callback);
        break;
      case 3:
        asad.animate({left: '-107px'}, 400, 'linear', callback);
        break;
    }
  },
  rebuildAsad: function() {
    this.destroyAsad();
    this.createAsad();
    this.giveAsadBehavior();
  }
}

//Have a timer for when asad shows up, maybe when the mouse doesn't move for 20 seconds
Asadify.me();
