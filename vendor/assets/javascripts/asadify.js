var Asadify = {
  me: function() {
    console.log("Initializing!");
    //create elements on page
    this.createAsad();
    //give elements behavior
    this.giveAsadBehavior();
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
    this.asad.remove();
    delete this.asad;
  },
  placeAsad: function() {
    var position = Math.floor(Math.random() * 4);
    this.asad.data('pos', position); //0-1-2-3, 0 is top, clockwise
  },
  drawAsad: function() {
    var asad = this.asad;
    asad.css("width", 50);
    asad.css("height", 50);
    asad.css("z-index", 999);
    asad.css("background-color", "red");
    asad.css("position", "fixed");
    //should eventually check for position and place accordingly
    switch(asad.data('pos')) {
      case 0:
        asad.css("top", 0);
        asad.css("right", 50);
        break;
      case 1:
        asad.css("right", 0);
        asad.css("bottom", 50);
        break;
      case 2:
        asad.css("bottom", 0);
        asad.css("left", 50);
        break;
      case 3:
        asad.css("top", 50);
        asad.css("left", 0);
        break;
    }
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
    switch(asad.data('pos')) {
      case 0:
        asad.animate({top: '-50px'}, 400, 'linear', callback);
        break;
      case 1:
        asad.animate({right: '-50px'}, 400, 'linear', callback);
        break;
      case 2:
        asad.animate({bottom: '-50px'}, 400, 'linear', callback);
        break;
      case 3:
        asad.animate({left: '-50px'}, 400, 'linear', callback);
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
