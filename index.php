<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <link type="text/css" rel="stylesheet" href="css/menu.css">
    <script type="text/javascript" src="js/jquery-1.7.1.js"></script>
    <script type="text/javascript" src="js/menu.js"></script>
  </head>
  <body>
    <div id="mobile-menu-current">
      Selected menu
    </div>
    <ul class="mobile-menu-mainmenu" id="mobile-menu-1">
      <li>
        Opción 1
      </li>
      <li class="mobile-menu-isparent" data-mobile-menu-id="01">
        Opción 2
      </li>
      <li>
        Opción 3
      </li>
      <li class="mobile-menu-isparent" data-data-mobile-menu-id="02">
        Opción 4
        
      </li>

    </ul>
    <ul class="mobile-menu-submenu" id="mobile-menu-01" data-mobile-menu-parent="1">
      <li>
        Submenú 1
      </li>
      <li>
        Submenú 2
      </li>
      <li>
        Submenú 3
      </li>
      <li>
        Submenú 4
      </li>
    </ul>
    <ul class="mobile-menu-submenu" id="mobile-menu-02" data-mobile-menu-parent="1">
      <li>
        Submenú a
      </li>
      <li>
        Submenú b
      </li>
      <li>
        Submenú c
      </li>
      <li>
        Submenú d
      </li>
    </ul>
    
    <div id="mobile-menu-open">
      M
    </div>
    
    <div id="mobile-menu-close">
      [X]
    </div>
   
  </body>
</html>