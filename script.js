$(document).ready(function () {
  var mainInterval = setInterval(goForward, 5000);

  //GRO REVIEW: make code comments also in english
  //funkcje slajdera
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
  //<i class="demo-icon icon-plus"></i>
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

  //GRO REVIEW: make code comments also in english
  //stopka
  var today = new Date();
  $("#stopka").text(today);
   
  //GRO REVIEW: make code comments also in english
  /*kiedykolwiek li od parenta (nie od childa) jest hoverowany... */
  $("ul.parent > li").hover(
    function () {
      //GRO REVIEW: make code comments also in english
        $(this) /*this jest tutaj */
        .find("ul.child")
        .show(100);
    },
    function () {
      $(this).find("ul.child").hide(300);
    }
  );

  //GRO REVIEW: make ids and css classes in english, adjust here when you change your index.html
  $("#slajder").on("click", function () {
    $(".visible").removeClass("visible").css("display", "none");
    $(".slider-outer").fadeIn("slow").addClass("visible");
  });

  $("#todo").on("click", function () {
    $(".visible").removeClass("visible").css("display", "none");
    $("#listContainer").fadeIn("slow").addClass("visible");
  });

  $(".icon-plus").on("click", function () {
    var taskText = "<p>" + $("#taskInput").val() + "</p>";
    var task = $("<div class='listStyle'></div>")
      .html(taskText)
      .append("<i class='demo-icon icon-ok'></i>")
      .append("<i class='demo-icon icon-trash'></i>");
    $("#ToDoContainer").append(task);
    $("#taskInput").val("");
  });

  $("#ToDoContainer").on("click", ".icon-ok", function () {
    var remembered = $(this).parent().clone();
    $(this).parent().css("display", "none");
    $("#DoneContainer").append(remembered);
  });

  $("#listContainer").on("click", ".icon-trash", function () {
    $(this).parent().css("display", "none");
  });
});

//GRO REVIEW: make code comments also in english
//kod z biblioteki p5.js
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
  for (var i = 0; i < 20; i++) {
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
