<!DOCTYPE html>
<html lang="pt-br">
<head>
    <title>Above - Sua vida virginiane.</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
    <link href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" rel="stylesheet">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="{{ asset('css/admin/admin.css') }}" rel="stylesheet">


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


</head>

<body class="w3-light-grey">

<!-- Top container -->
<div class="w3-bar w3-top w3-black w3-large" style="z-index:4">
    <button class="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onclick="w3_open();"><i class="fa fa-bars"></i>  Menu</button>
    <a href="/admin" class="admin-logo w3-bar-item w3-right">Above</a>
</div>

<!-- Sidebar/menu -->
<nav class="admin-menu w3-sidebar w3-collapse" style="z-index:3;width:300px;" id="mySidebar"><br>
    <div class="w3-container w3-row">
     
        <div class="w3-col s8 w3-bar">
            @php
               $user_name = explode(" ", Auth::user()->name);
               $first_name = $user_name[0];
            @endphp
            <span>Bem vindo(a), <strong>{{ $first_name }}</strong></span><br>
            <a href="{{ route('logout') }}"
               onclick="event.preventDefault();
                            document.getElementById('logout-form').submit();"
               class="w3-bar-item w3-button"><i class="fa fa-sign-out"></i></a>

            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                {{ csrf_field() }}
            </form>
        </div>
    </div>
    <hr>
    <div class="w3-container">
        <h5>Menu</h5>
    </div>
    <div class="w3-bar-block">
        <a href="#" class="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onclick="w3_close()" title="close menu"><i class="fa fa-remove fa-fw"></i>  Fechar Menu</a>
        <a href="{{route('moons.index')}}" class="menu-link w3-bar-item w3-button w3-padding"><i class="fas fa-moon fa-fw"></i>Fases da Lua</a>
        <a href="{{route('planets.index')}}" class="menu-link w3-bar-item w3-button w3-padding"><i class="fas fa-atlas fa-fw"></i>  Planetas</a>
        <a href="{{route('signs.index')}}" class="menu-link w3-bar-item w3-button w3-padding"><i class="far fa-star fa-fw"></i>  Signos</a>
        <a href="{{route('users.index')}}" class="menu-link w3-bar-item w3-button w3-padding"><i class="fas fa-users fa-fw"></i> Usuários</a>
     
    </div>
</nav>


<!-- Overlay effect when opening sidebar on small screens -->
<div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<!-- !PAGE CONTENT! -->
<div class="w3-main" style="margin-left:300px;margin-top:43px;">

    @yield('content')

</div>

<script>
    // Get the Sidebar
    var mySidebar = document.getElementById("mySidebar");

    // Get the DIV with overlay effect
    var overlayBg = document.getElementById("myOverlay");

    // Toggle between showing and hiding the sidebar, and add overlay effect
    function w3_open() {
        if (mySidebar.style.display === 'block') {
            mySidebar.style.display = 'none';
            overlayBg.style.display = "none";
        } else {
            mySidebar.style.display = 'block';
            overlayBg.style.display = "block";
        }
    }

    // Close the sidebar with the close button
    function w3_close() {
        mySidebar.style.display = "none";
        overlayBg.style.display = "none";
    }
</script>

</body>
</html>