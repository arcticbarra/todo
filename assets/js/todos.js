// Check off todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("done");
});

// Removing todos
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

// Add todos
$("input[type='text']").on("keypress", function(event) {
  var todoText = $(this).val();
  if (event.which === 13 && todoText !== "") {
    $("ul").append("<li><span>X</span> "+todoText+"</li>");
    $(this).val("");
  }
});
