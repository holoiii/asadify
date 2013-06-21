var Asadify = (function ($){
  var me,
    position,
    asad, person, current_character, characters,
    createCharacter, destroyCharacter, chooseCharacter, rebuildCharacter, giveCharacterBehavior,

    animateAsad, placeAsad, drawAsad,
    animateCharacter, placeCharacter, drawCharacter,

    mouseTimer, timerId;

  asad = null;
  person = null;
  current_character = null;
  timerId = null;

  characters = [
    {
      name: "asad",
      url: "url('/assets/asad-final-scaled.png')",
      width: 84,
      height: 138,
      positionOffsets: [
        {top: -73, right: 50, rotate: 180 },
        {right: -50, bottom: 50, rotate: -90},
        {bottom: -78, left: 50, rotate: 0},
        {top: 50, left: -50, rotate: 90}
      ]
    },
    {
      name: "chris",
      url: "url('/assets/chris-final-scaled.png')",
      width: 167,
      height: 83,
      positionOffsets: [
        {top: -5, left: 50, rotate: 180 },
        {right: -45, top: 50, rotate: -90},
        {bottom: -5, right: 50, rotate: 0},
        {bottom: 92, left: -50, rotate: 90}
      ]
    },
    {
      name: "zach",
      url: "url('/assets/zach-final-scaled.png')",
      width: 167,
      height: 83,
      positionOffsets: [
        {top: -5, left: 50, rotate: 180 },
        {right: -45, top: 50, rotate: -90},
        {bottom: -5, right: 50, rotate: 0},
        {bottom: 92, left: -50, rotate: 90}
      ]
    }
  ];

  /* Entry point into the widget 
   * call Asadify.me() to get things started
   */
  me = function() { 
    console.log("Initializing!");

    mouseTimer(rebuildCharacter, 5000); //call rebuildAsad whenever mouse doesn't move for 5 seconds
  }

  //private

  animateCharacter = function(callback) {
    console.log("Animating Character!");

    switch(position) {
      case 0:
        person.animate({top: '-134px'}, 400, 'linear', callback);
        break;
      case 1:
        person.animate({right: '-107px'}, 400, 'linear', callback);
        break;
      case 2:
        person.animate({bottom: '-134px'}, 400, 'linear', callback);
        break;
      case 3:
        person.animate({left: '-107px'}, 400, 'linear', callback);
        break;
    }
  }

  createCharacter = function() {
    console.log("Creating Character!");

    person = $("<div class='cool-asad'></div>");
    current_character = chooseCharacter();

    placeCharacter();
    drawCharacter();

    $("body").append(person);
  }

  chooseCharacter = function (){
    console.log("choosing character => ");
    return characters[Math.round((characters.length-1) * Math.random())];
  }

  destroyCharacter = function() {
    if(person != undefined) {
      person.remove();
      delete person;
    }
  }

  placeCharacter = function() {
    var currentPosition, newPosition, possiblePositions, index;

    currentPosition = position;
    possiblePositions = [0, 1, 2, 3];
    index = possiblePositions.indexOf(currentPosition);
    if(index != -1) {
      possiblePositions.splice(index, 1);
    }
    newPosition = possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
    position = newPosition; //0-1-2-3, 0 is top, clockwise
  }

  drawCharacter = function() {
    var rotate, transforms;
    console.log("Drawing character. Current character is -> " + current_character.name);
    
    person.css("width", current_character.width);
    person.css("height", current_character.height);
    person.css("z-index", 9999);
    person.css("background-image", current_character.url);
    person.css("position", "fixed");

    transforms = current_character.positionOffsets[position];

    if(transforms.top)    person.css("top", transforms.top);
    if(transforms.bottom) person.css("bottom", transforms.bottom);
    if(transforms.right)  person.css("right", transforms.right);
    if(transforms.left)   person.css("left", transforms.left);
    rotate = transforms.rotate;

    person.css("transform", "rotate(" + transforms.rotate + "deg)");
    person.css("-ms-transform", "rotate(" + transforms.rotate + "deg)");
    person.css("-webkit-transform", "rotate(" + transforms.rotate + "deg)");
  }

  giveCharacterBehavior = function() {
    console.log("Giving Asadable Behavior!");

    person.hover(function(e) {
      animateCharacter(destroyCharacter);
    });
  }

  rebuildCharacter = function (){
    destroyCharacter();
    createCharacter();
    giveCharacterBehavior();
  }

  //stub for now
  mouseTimer = function(callback, duration) {
    callback();
    //callback.apply(this);
    //$(window).on('mousemove', function (){
    //  if(timerId) { 
    //    window.clearInterval(timerId); 
    //    timerId = null;
    //  }
    //  timerId = window.setInterval(callback, duration);
    //});
  }

  return {
    me: me,
    drawCharacter: drawCharacter,
    current_character: current_character,
    rebuildCharacter: rebuildCharacter,
    placeCharacter: placeCharacter
  }
})(jQuery);
//Have a timer for when asad shows up, maybe when the mouse doesn't move for 20 seconds
