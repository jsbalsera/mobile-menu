$(document).ready(function() {
  $("#desplegarmenu").bind("click", function() {
    $(".menu").animate({left:'0px'}).addClass("visible");
    $("#cerrarmenu").show();
    $(this).hide();
  });
  
  $("#cerrarmenu").bind("click", function() {    
    $(".visible").animate({left:'-' + ($(".visible").css('width'))}).removeClass("visible");
    $("#desplegarmenu").show();
    $(this).hide();
    if ($("#menuactual").css('top') == '0px') {
      $("#menuactual").animate({top:'-' + $("#menuactual").css('height')});
    }
  });
  
  $(".consub").bind("click", function() {
    $(".visible").animate({left:'-' + ($(".visible").css('width'))}).removeClass("visible");
    var id = $(this).attr("data-menuid");
    $("#" + id).show().animate({left:'0px'}).addClass("visible");
    
    var fondo = $(this).css('background-color');
    var color = $(this).css('color');
    var menuactual = $("#menuactual");
    menuactual.text($(this).text())
              .animate({top:'0px'})
              .css({'background-color': fondo, 'color': color})
              .attr("data-menuid", id);
  });
  
  $("#menuactual").bind("click", function() {
    var submenu = $("#" + $(this).attr("data-menuid")); 
    submenu.animate({left:'-' + submenu.css('width')}).removeClass("visible");
    
    var padre = $("#" + submenu.attr('data-padre'));
    padre.animate({left:'0px'}).addClass("visible");
    if (padre.attr("data-padre") && padre.attr("data-padre").length > 0) {
      $(this).text(padre.text())
             .css({'background-color': padre.css('background-color'),
                  'color': padre.css('color')})
             .attr("data-menuid", padre.attr('id'));
    } else {
      $(this).animate({top:'-' + $(this).css("height")});
      $("#cerrarmenu").show();
    }
  });
});
