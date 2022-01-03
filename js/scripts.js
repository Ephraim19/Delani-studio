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

$(document).ready(function () {
  $("form").submit(function (event) {
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("input#message").val();

    console.log(message);
    event.preventDefault();
  });
});

$(document).ready(function () {
  $("#work4").mouseover(function () {
    $("#work4pop").show();
  });
  $("#work4").mouseout(function () {
    $("#work4pop").hide();
  });
});

$(document).ready(function () {
  $("#work3").mouseover(function () {
    $("#work3pop").show();
  });
  $("#work3").mouseout(function () {
    $("#work3pop").hide();
  });
});

$(document).ready(function () {
  $("#work2").mouseover(function () {
    $("#work2pop").show();
  });
  $("#work2").mouseout(function () {
    $("#work2pop").hide();
  });
});

$(document).ready(function () {
  $("#work1").mouseover(function () {
    $("#work1pop").show();
  });
  $("#work1").mouseout(function () {
    $("#work1pop").hide();
  });
});

$(document).ready(function () {
  $("#work5").mouseover(function () {
    $("#work5pop").show();
  });
  $("#work5").mouseout(function () {
    $("#work5pop").hide();
  });
});

$(document).ready(function () {
  $("#work6").mouseover(function () {
    $("#work6pop").show();
  });
  $("#work6").mouseout(function () {
    $("#work6pop").hide();
  });
});

$(document).ready(function () {
  $("#work7").mouseover(function () {
    $("#work7pop").show();
  });
  $("#work7").mouseout(function () {
    $("#work7pop").hide();
  });
});

$(document).ready(function () {
  $("#work8").mouseover(function () {
    $("#work8pop").show();
  });
  $("#work8").mouseout(function () {
    $("#work8pop").hide();
  });
});