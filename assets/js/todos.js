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
    $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+todoText+"</li>");
    $(this).val("");
  }
});

$(".fa-plus").on("click", function() {
  $("input[type='text']").fadeToggle();
})
