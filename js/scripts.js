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

$(document).ready(function(){
  $("#btn1").click(function(){
    $("img").before('<span class="gerado1"><b>o texto comerça aqui,</b></span>');
  });
  $('#btn2').click(function () {
      $('img').after('<span class="gerado2"><b> , o texto termina aqui</b></span>');
    });
  $('#remover').click(function () {
      $('.gerado1').remove();
      $('.gerado2').remove();
    });
 });
