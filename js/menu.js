$(document).ready(function() {
  $("#desplegarmenu").bind("click", function() {
    $(".menu").animate({left:'0px'});
    $("#cerrarmenu").show();
    $(this).hide();
  });
  
  $("#cerrarmenu").bind("click", function() {
    $(".menu").animate({left:'-210px'});
    $("#desplegarmenu").show();
    $(this).hide();
  });
  
  $(".consub").bind("click", function() {
    $(".menu").animate({left:'-210px'});
    var id = $(this).attr("data-menuid");
    $("#" + id).show().animate({left:'0px'});
    
    var fondo = $(this).css('background-color');
    var color = $(this).css('color');
    var menuactual = $("#menuactual");
    menuactual.text($(this).text())
              .show()
              .animate({top:'0px'})
              .css({'background-color': fondo, 'color': color});
              
    
    $("#cerrarmenu").hide();
    
    $("#cerrarsubmenu").attr("data-menuid", id)
                       .css({'background-color': fondo, 'color': color})
                       .show();
  });
  
  $("#cerrarsubmenu").bind("click", function() {
    var submenu = $("#" + $(this).attr("data-menuid")); 
    submenu.animate({left:'-210px'});
    $("#" + submenu.attr('data-padre')).animate({left:'0px'});
    
    $(this).hide();
    $("#cerrarmenu").show();
    $("#menuactual").animate({top:'-30px'});
  });
});
