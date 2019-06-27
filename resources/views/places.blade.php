<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:light,regular,bold|Arvo:regular,bold|Roboto:thin,light,regular,medium,bold,black" rel="stylesheet">

        <!-- Styles -->
       <link href="{{ asset('css/app.css') }}" rel="stylesheet">
       
    </head>
    <body>
        <div class="places flex-center full-height main-container">
        <header><h1 class="logo-above">above</h1></header>

        
    
                <div class="sign-places">
                    <ul class="nav nav-tabs" id="signPlacesTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" href="#aries" id="aries-tab" data-toggle="tab" role="tab" aria-controls="aries" aria-selected="true">Áries</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#taurus" id="taurus-tab" data-toggle="tab" role="tab" aria-controls="taurus" aria-selected="false">Touro</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#gemini" id="gemini-tab" data-toggle="tab" role="tab" aria-controls="gemini" aria-selected="false">Gêmeos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#cancer" id="cancer-tab" data-toggle="tab" role="tab" aria-controls="cancer" aria-selected="false">Câncer</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#leo" id="leo-tab" data-toggle="tab" role="tab" aria-controls="leo" aria-selected="false">Leão</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#virgo" id="virgo-tab" data-toggle="tab" role="tab" aria-controls="virgo" aria-selected="false">Virgem</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#libra" id="libra-tab" data-toggle="tab" role="tab" aria-controls="libra" aria-selected="false">Libra</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#scorpio" id="scorpio-tab" data-toggle="tab" role="tab" aria-controls="scorpio" aria-selected="false">Escorpião</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#sagittarius" id="sagittarius-tab" data-toggle="tab" role="tab" aria-controls="sagittarius" aria-selected="false">Sagitário</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#capricorn" id="capricorn-tab" data-toggle="tab" role="tab" aria-controls="capricorn" aria-selected="false">Capricórnio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#aquarius" id="aquarius-tab" data-toggle="tab" role="tab" aria-controls="aquarius" aria-selected="false">Aquário</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#pisces" id="pisces-tab" data-toggle="tab" role="tab" aria-controls="pisces" aria-selected="false">Peixes</a>
                        </li> 
                    </ul>
                    <div class="tab-content" id="signPlacesTabContent">
                        <div class="tab-pane fade show active" id="aries" role="tabpanel" aria-labelledby="aries-tab">
                            <h3>Áries</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                        </div>
                        <div class="tab-pane fade" id="taurus" role="tabpanel" aria-labelledby="taurus-tab">
                        <h3>Touro</h3>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                        </div>
                        <div class="tab-pane fade" id="gemini" role="tabpanel" aria-labelledby="gemini-tab">
                        <h3>Gêmeos</h3>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                        </div>
                        <div class="tab-pane fade" id="cancer" role="tabpanel" aria-labelledby="cancer-tab">
                        <h3>Câncer</h3>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                        </div>
                        <div class="tab-pane fade" id="leo" role="tabpanel" aria-labelledby="leo-tab">
                        <h3>Leão</h3>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                        </div>
                        <div class="tab-pane fade" id="virgo" role="tabpanel" aria-labelledby="virgo-tab">
                        <h3>Virgem</h3>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                        </div>
                        <div class="tab-pane fade" id="libra" role="tabpanel" aria-labelledby="libra-tab">
                        <h3>Libra</h3>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                        </div>
                        <div class="tab-pane fade" id="scorpio" role="tabpanel" aria-labelledby="scorpio-tab">
                        <h3>Escorpião</h3>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                        </div>
                        <div class="tab-pane fade" id="sagittarius" role="tabpanel" aria-labelledby="sagittarius-tab">
                        <h3>Sagitário</h3>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                        </div>
                        <div class="tab-pane fade" id="capricorn" role="tabpanel" aria-labelledby="capricorn-tab">
                        <h3>Capricórnio</h3>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                        </div>
                        <div class="tab-pane fade" id="aquarius" role="tabpanel" aria-labelledby="aquarius-tab">
                        <h3>Aquário</h3>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                        </div>
                        <div class="tab-pane fade" id="pisces" role="tabpanel" aria-labelledby="pisces-tab">
                        <h3>Peixes</h3>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                        </div>
                    </div>
                </div>

              
            </div>
            

            </div>

            <div id="map"></div>
         <!-- Scripts -->

         <script src="{{ asset('js/places.js') }}" defer></script>

         <script async defer src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyCcGzYzYG1XCHItLqB3k2AOJzKu8RTvM3E&callback=initMap">
        </script>
         <script src="{{ asset('js/app.js') }}" defer></script>
    </body>
</html>
