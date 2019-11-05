<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

            <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Above - Sua vida virginiane.</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:light,regular,bold|Arvo:regular,bold|Roboto:thin,light,regular,medium,bold,black" rel="stylesheet">

        <!-- Styles -->
       <link href="{{ asset('css/app.css') }}" rel="stylesheet">
       
    </head>
    <body>
    <header><h1 class="logo-above-places">above</h1></header>
    <div><!-- --></div>
        <div class="places flex-center full-height main-container">

        
    
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
                            <h3><span>Áries</span> - Academias</h3>
                            <p>Áries é um signo de fogo, elemento ardente e de movimento. Arianas preferem atividades que gastem energia, pois tem muita disposição e energia pra gastar, por isso, vemos muitas arianas nas academias de ginástica.</p>
                        </div>
                        <div class="tab-pane fade" id="taurus" role="tabpanel" aria-labelledby="taurus-tab">
                        <h3><span>Touro</span> - Padarias</h3>
                        <p>Taurinas são as mais comilonas do rolê. Doces, salgados, elas amam tudo! Muitas vezes estão cheias mas continuam comento. Isso é porque as taurinas encontram um conforto real na comida. Gastam muito dinheiro com comida mas não comem qualquer coisa, elas só gostam do bom e do melhor.</p>
                        </div>
                        <div class="tab-pane fade" id="gemini" role="tabpanel" aria-labelledby="gemini-tab">
                        <h3><span>Gêmeos</span> - Livrarias</h3>
                        <p>Gêmeos é o signo da intelectualidade. Geminianas são muito curiosas e suas mentes são famintas por informação. Sentem prazer em aprender e uma livraria pode ser um pequeno paraíso para elas e os livros também são matéria prima para novos assuntos para conversar, e, se não for pra conversar, as geminianas nem saem de casa!</p>
                        </div>
                        <div class="tab-pane fade" id="cancer" role="tabpanel" aria-labelledby="cancer-tab">
                        <h3><span>Câncer</span> - Tudo Para a Casa</h3>
                        <p>O caranguejo é um animal que carrega a "casa" para onde vai e representa as cancerianas que são bastante caseiras e, por mais que também sejam do rolê, elas gostam de saber que tem uma casa aconchegante e familiar para onde voltar. Cancerianas não querem uma casa, elas querem um lar, por isso, lugares de artigos e concertos para a casa vão ajudar as cancerianas a cuidar e construir o lugar perfeito para curtir com a família e os amigos.</p>
                        </div>
                        <div class="tab-pane fade" id="leo" role="tabpanel" aria-labelledby="leo-tab">
                        <h3><span>Leão</span> - Baladinhas Top</h3>
                        <p>Leoninas são expansivas e tem prazer em desfrutar a parte exuberante (assim como elas) da vida. São bastante festeiras e amam diversão e lugares cheios de gente onde possam brilhar e, se possível, serem o centro das atenções.</p>
                        </div>
                        <div class="tab-pane fade" id="virgo" role="tabpanel" aria-labelledby="virgo-tab">
                        <h3><span>Virgem</span> - Spas</h3>
                        <p>As virginianas buscam a perfeição no trabalho, nas coisas e nas pessoas e estão sempre em busca de serem a melhor versão de si mesmas. Seu signo é associado à saúde, limpeza e cuidados com o corpo, assim, spas e centros de estética tem forte apelo para elas.</p>
                        </div>
                        <div class="tab-pane fade" id="libra" role="tabpanel" aria-labelledby="libra-tab">
                        <h3><span>Libra</span> - Bares</h3>
                        <p>As librianas são incrivelmente sociáveis! Um bar, para elas, não precisaria nem das bebidas, porque elas estão lá para se relacionar com as pessoas. Quanto mais pessoas melhor. São abertas às opiniões alheias e caem como uma luva em conversas de bar, podendo falar até sobre política sem brigar. E se saírem do bar com um crush, melhor!</p>
                        </div>
                        <div class="tab-pane fade" id="scorpio" role="tabpanel" aria-labelledby="scorpio-tab">
                        <h3><span>Escorpião</span> - Lojas de bebidas</h3>
                        <p>As escorpianas são intensas e marcantes e são atraídas por coisas obscuras e underground. Se sentem bem sozinhas,  com seu whisky na mão absortas em seus pensamentos mais profundos.</p>
                        </div>
                        <div class="tab-pane fade" id="sagittarius" role="tabpanel" aria-labelledby="sagittarius-tab">
                        <h3><span>Sagitário</span> - Parques</h3>
                        <p>As sagitarianas amam a natureza e estar ao ar livre. Em parques elas poderão estar livres, leves e soltas tendo em sua vista os horizontes do mundo para onde serão apontadas as suas flechas de centauro (figura mitológica que as representa).</p>
                        </div>
                        <div class="tab-pane fade" id="capricorn" role="tabpanel" aria-labelledby="capricorn-tab">
                        <h3><span>Capricórnio</span> - Shoppings</h3>
                        <p>O meme das capricornianas poderia ser aquele da Carolina Ferraz "Porque eu sou rica!". Não são consumistas, mas vão ao shopping porque trabalharam muito e juntaram muito dinheiro e podem comprar coisas que melhorem seu nível de vida e status social (que é importante para elas).</p>
                        </div>
                        <div class="tab-pane fade" id="aquarius" role="tabpanel" aria-labelledby="aquarius-tab">
                        <h3><span>Aquário</span> - Artigos eletrônicos</h3>
                        <p>As aquarianas tem a visão voltada para o futuro e se interessam pelo o que é novidade e pelo o que é engenhoso. Nas lojas de eletrônicos elas vão poder estar em contato com o futuro e as novidades do mundo.</p>
                        </div>
                        <div class="tab-pane fade" id="pisces" role="tabpanel" aria-labelledby="pisces-tab">
                        <h3><span>Peixes</span> - Cinemas</h3>
                        <p>Sonhadoras e de imaginação fértil, as piscianas se sentem em casa em ambientes artísticos e tem uma tendência a querer escapar das coisas ruins da realidade se refugiando no maravilhoso mundo da sua imaginação, mesmo que só por um momento. No cinema, elas podem viajar para "mundos" de todas as cores e todos os tipos.</p>
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
