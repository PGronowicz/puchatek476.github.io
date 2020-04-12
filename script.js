$(document).ready(function() {
  var mainInterval = setInterval(goForward, 5000);

  function goForward() {
    var currIMG = $(".active");
    var nextIMG = currIMG.next();

    clearInterval(mainInterval);
    mainInterval = setInterval(goForward, 5000);

    if (nextIMG.length) {
      currIMG.removeClass("active").css("z-index", -10);
      nextIMG.addClass("active").css("z-index", 10);
    } else {
      nextIMG = $("#first");
      currIMG.removeClass("active").css("z-index", -10);
      nextIMG.addClass("active").css("z-index", 10);
    }
  }

  function goBackward() {
    var currIMG = $(".active");
    var prevIMG = currIMG.prev();

    clearInterval(mainInterval);
    mainInterval = setInterval(goForward, 5000);

    if (prevIMG.length) {
      currIMG.removeClass("active").css("z-index", -10);
      prevIMG.addClass("active").css("z-index", 10);
    } else {
      nextIMG = $("#last");

      currIMG.removeClass("active").css("z-index", -10);
      nextIMG.addClass("active").css("z-index", 10);
    }
  }

  $(".next").on("click", goForward);

  $(".prev").on("click", goBackward);

  var today = new Date();
  $("#stopka").text(today);

  /*kiedykolwiek li od parenta (nie od childa) jest hoverowany... */
  $("ul.parent > li").hover(
    function() {
      $(this) /*this jest tutaj */
        .find("ul.child")
        .show(100);
    },
    function() {
      $(this)
        .find("ul.child")
        .hide(300);
    }
  );

  $("#slajder").on("click", function() {
    $(".slider-outer").fadeIn("slow");
  });
});

class Bubble {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
  }
  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
  show() {
    stroke(250);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 30, 30);
  }
}

var bubbles = [];
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("container");
  for (var i = 0; i < 100; i++) {
    bubbles[i] = new Bubble();
  }
}

function draw() {
  background("#14a6c7");
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}
