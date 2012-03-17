<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <link type="text/css" rel="stylesheet" href="css/menu.css">
    <script type="text/javascript" src="js/jquery-1.7.1.js"></script>
    <script type="text/javascript" src="js/menu.js"></script>
  </head>
  <body>
    <div id="menuactual">
      AAA
    </div>
    <ul class="menu" id="1">
      <li>
        Opción 1
      </li>
      <li class="consub"  data-menuid="01">
        Opción 2
      </li>
      <li>
        Opción 3
      </li>
      <li class="consub" data-menuid="02">
        Opción 4
        
      </li>

    </ul>
    <ul class="submenu" id="01" data-padre="1">
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
    <ul class="submenu" id="02" data-padre="1">
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
    
    <div id="desplegarmenu">
      M
    </div>
    
    <div id="cerrarmenu">
      [X]
    </div>
   
  </body>
</html>