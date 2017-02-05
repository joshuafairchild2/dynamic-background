$(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#light-blue").click(function() {
    $("body").removeClass();
    $("body").addClass("light-blue-background");
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
});
