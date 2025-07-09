$(document).ready(function() {
  $("#btnMostrar").click(function() {
    $("#areaTexto").slideToggle();
  });
});
$(document).ready(function() {
  $(".card").hover(function() {
    $(this).addClass("shadow-lg");
  }, function() {
    $(this).removeClass("shadow-lg");
  });
});

$(document).ready(function() {
  $("#btnToggle").click(function() {
    $("#texto").slideToggle();
  });

$(".box").hover(
    function() {
      $(this).css("background-color", "#d4edda");
    },
    function() {
      $(this).css("background-color", "#f8f9fa");
    }
  );
});
