<!DOCTYPE html>
<html lang="pt-br">
<head>
    <title>Above - Dashboard</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

   <!-- <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
    <link href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" rel="stylesheet">

   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"> 

    <link href="{{ secure_asset('css/admin/admin.css') }}" rel="stylesheet">


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> 
   


</head>

<body>

    <nav class="abv-dashboard-nav abv-grid">

        <div class="abv-logo-wrapper">
            <a class="abv-admin-logo" href="{{ url('/admin') }}">
                    above
                    <span>beta</span>
            </a>
        </div>
        <div class="abv-wrapper">
             <a href="#" class="abv-username" id="abvDropdownMenuButton"> {{ Auth::user()->name }}<i class="fas fa-sort-down"></i></a> 

            <div id="abvDropdownMenu" class="abv-dropdown-menu hidden" aria-labelledby="abvDropdownMenuButton">

                 <a class="dropdown-item" href="{{ route('admin.auth.logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('admin-logout-form').submit();">
                                        Sair <i class="fas fa-sign-out-alt"></i>
                                    </a>

                                    <form id="admin-logout-form" action="{{ route('admin.auth.logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
            </div>

        </div>

    </nav>


    <div class="abv-dashboard-container">

          <aside class="abv-dashboard-menu">
              <ul>
                  <li class="abv-dashboard-menu-item"><a href="{{route('planets.index')}}"><i class="fas fa-atlas fa-fw"></i>  Planetas</a></li>
                  <li class="abv-dashboard-menu-item"><a href="{{route('moons.index')}}"><i class="fas fa-moon fa-fw"></i>Fases da Lua</a></li>
                  <li class="abv-dashboard-menu-item"><a href="{{route('signs.index')}}"><i class="far fa-star fa-fw"></i>  Signos</a></li>
                  <li class="abv-dashboard-menu-item"><a href="{{route('feellings.index')}}"><i class="far fa-grin-beam"></i>  Sentimentos</a></li>
                  <li class="abv-dashboard-menu-item"><a href="{{route('advices.index')}}"><i class="fas fa-exclamation fa-fw"></i>  Dicas</a></li>
                  <li class="abv-dashboard-menu-item"><a href="{{route('users.index')}}"><i class="fas fa-users fa-fw"></i> Usuários</a></li>
              </ul>
                
                
                
                
                

         </aside>
    
            <main>

                @yield('content')


            </main>

    </div>
  




    <script src="{{ secure_asset('js/admin.js') }}"></script>

</body>
</html>