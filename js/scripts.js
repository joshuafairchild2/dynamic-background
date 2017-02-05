$(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });

  $("button#orange").click(function() {
    $("body").removeClass();
    $("body").addClass("orange-background");
  });

  $("button#tnr").click(function() {
    $("body").removeClass("cursive monospace");
    $("body").addClass("tnr");
  });

  $("button#cursive").click(function() {
    $("body").removeClass("tnr monospace")
    $("body").addClass("cursive");
  });

  $("button#monospace").click(function() {
    $("body").removeClass("tnr cursive");
    $("body").addClass("monospace");
  });

  $("button#purple").click(function() {
    $("h3").removeClass("pink-font red-font");
    $("h3").addClass("purple-font");
  });

  $("button#pink").click(function() {
    $("h3").removeClass("purple-font red-font");
    $("h3").addClass("pink-font");
  });

  $("button#red").click(function() {
    $("h3").removeClass("purple-font pink-font");
    $("h3").addClass("red-font");
  });
});
