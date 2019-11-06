<!doctype html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="csrf-token" content="{{ csrf_token() }}">


        <title>Above - Sua vida virginiane.</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:light,regular,bold|Arvo:regular,bold|Roboto:thin,light,regular,medium,bold,black" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: white;
                font-family: 'Arvo', serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .main-container {
                background-color: #E2C9A7;
                background: linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)) , url({{ secure_asset('images/presentation-page-background.png') }});
                background-repeat: no-repeat;
                background-size: cover;
                background-position: 20%;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: left;
            }

            .title {
                font-size: 2.6em;
                font-weight: bold;
                margin-left: 0.5em;
                margin-right: 1em;
            }

            .logo-above {
                position: absolute;
                top: 0%;
                left: 6%;
            }

            .links > a {
                color: white;
                text-decoration: none;
                text-transform: uppercase;
            }

            .login-link {
                font-family: 'Roboto Condensed', sans-serif;
                font-weight: normal;
                padding: 0.5em;
                position: absolute;
                right: 10%;
            }

            .register-link {
                font-family: 'Roboto', sans-serif;
                font-weight: 500;
                font-size: 1.2em;
                border: 2px solid #8344E0;
                background-color: #8344E0;
                padding: .5em 1.5em;
                border-radius: 1.5em;
                display: block;
                position: relative;
                top: 68vh;
                left: -9em;
            }

            .m-b-md {
                margin-bottom: 30px;
            }

            @media (min-width: 440px) {
                .register-link { 
                    font-size: 1.5em;
                }
            } 

             @media (min-width: 380px) {
                .register-link { 
                    font-size: 1.3em;
                }
            } 

        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height main-container">

        <h1 class="logo-above">above</h1>
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                    <a href="{{ secure_url('/home') }}"></a>
                    @else
                        <a class="login-link" href="{{ secure_url('/login') }}">Entrar</a>

                        @if (Route::has('register'))
                            <a class="register-link" href="{{ secure_url('/register') }}">Começar</a>
                        @endif
                    @endauth
                </div>
            @endif

            <div class="content">
                <div class="m-b-md">
                    <p class="title">Organização para uma vida mais virginiane.</p>
                </div>

              
            </div>
        </div>
    </body>
</html>
