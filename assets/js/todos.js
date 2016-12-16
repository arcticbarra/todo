// Check off todos by clicking
$("li").on("click", function() {
  $(this).toggleClass("done");
});

// Removing todos
$("span").on("click", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  
})
