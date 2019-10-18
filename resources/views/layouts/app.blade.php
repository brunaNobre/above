<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Above - Sua vida virginiane.</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Arvo|Roboto:300,400,500,700&display=swap" />
    <!-- Icons -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />




    <!-- Styles -->
    <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
            @yield('content')
    </div>
</body>
</html>