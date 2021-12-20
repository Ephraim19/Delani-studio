$(document).ready(function () {
  $("#designs").click(function () {
    $("#design").toggle();
    $("#design-img").toggle();
  });
});

$(document).ready(function () {
  $("#dev").click(function () {
    $("#development").toggle();
    $("#development-img").toggle();
  });
});

$(document).ready(function () {
  $("#products").click(function () {
    $("#product").toggle();
    $("#product-img").toggle();
  });
});

//$(document).ready(function () {
//$("#work4").hover(function () {
//$("#work4pop").popup();
//});
//});

$(document).ready(function () {
  $("form").submit(function (event) {
    var name = $('input#name').val()
    var email = $('input#email').val()
    var message = $('input#message').val()

    console.log( message)
    event.preventDefault();
  });
});
