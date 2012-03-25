$(document).ready(function() {
  
  /**
   * Open menu button click handler
   * Show main menu
   * Hide itself
   * Show close menu button
   */
  $("#mobile-menu-open").bind("click", function() {
    $(".mobile-menu-mainmenu").animate({left:'0px'}).addClass("mobile-menu-visible");
    $("#mobile-menu-close").show();
    $(this).hide();
  });
  
  /**
   * Close menu button click handler
   * Hides visible menu and itself
   * Shows open menu button
   * If there's upper bar hides it
   */
  $("#mobile-menu-close").bind("click", function() {    
    $(".mobile-menu-visible")
          .animate({left:'-' + ($(".mobile-menu-visible").css('width'))})
          .removeClass("mobile-menu-visible");
    $("#mobile-menu-open").show();
    $(this).hide();
    
    var currentbar = $("#mobile-menu-current");
    if (currentbar.css('top') == '0px') {
      currentbar.animate({top:'-' + currentbar.css('height')});
    }
  });
  
  /**
   * Menu option with submenu associated click handler
   * Hides visible menu
   * Shows child menu
   * Shows current menu bar and styles it
   */
  $(".mobile-menu-isparent").bind("click", function() {
    $(".mobile-menu-visible").
      animate({left:'-' + ($(".mobile-menu-visible").css('width'))}).
      removeClass("mobile-menu-visible");
    var id = $(this).attr("data-mobile-menu-id");
    $("#mobile-menu-" + id).show().animate({left:'0px'}).addClass("mobile-menu-visible");
    
    var fondo = $(this).css('background-color');
    var color = $(this).css('color');
    var currentbar = $("#mobile-menu-current");
    currentbar.text($(this).text())
              .animate({top:'0px'})
              .css({'background-color': fondo, 'color': color})
              .attr("data-mobile-menu-id", id);
  });
  
  /**
   * Current menu bar click handler
   * Shows visible menu's parent
   * Hides visible menu
   * If parent menu is the main menu hides itself
   */
  $("#mobile-menu-current").bind("click", function() {
    var submenu = $("#mobile-menu-" + $(this).attr("data-mobile-menu-id")); 
    submenu.animate({left:'-' + submenu.css('width')}).removeClass("mobile-menu-visible");
    
    var parent = $("#mobile-menu-" + submenu.attr('data-mobile-menu-parent'));
    console.log(submenu);
    console.log(parent);
    parent.animate({left:'0px'}).addClass("mobile-menu-visible");
    if (parent.attr("data-mobile-menu-parent") && parent.attr("data-mobile-menu-parent").length > 0) {
      $(this).text(parent.text())
             .css({'background-color': parent.css('background-color'),
                  'color': parent.css('color')})
             .attr("data-mobile-menu-id", parent.attr('id'));
    } else {
      $(this).animate({top:'-' + $(this).css("height")});
      $("#mobile-menu-close").show();
    }
  });
});
