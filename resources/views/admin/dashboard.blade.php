@extends('layouts.dashboard')

@section('content')
<div class="container">



 <div class="card dash-card" style="width: 18rem;">
  <img class="card-img-top" src="/images/case-universe.png" alt="Imagem de capa do card">
  <div class="card-body">
    <h5 class="card-title">Eventos Astrológicos</h5>
    <p class="card-text">
        
    Cake chupa chups sesame snaps. Tootsie roll candy canes cake halvah pudding chocolate bar pie jujubes tiramisu.    

</p>
    <a href="#" class="above-admin-btn btn btn-primary">Ver</a>
  </div>
</div>



<div class="dash-cards">
    <div class="card dash-card" style="width: 18rem;">
    <img class="card-img-top" src="/images/fullmoonTOP.png" alt="Imagem de capa do card">
    <div class="card-body">
        <h5 class="card-title">Mudanças da Lua</h5>
        <p class="card-text">
            
        Biscuit sweet roll jelly beans gingerbread. Lemon drops cake caramels sesame snaps pastry candy canes oat cake.
    </p>
        <a href="#" class="above-admin-btn btn btn-primary">Ver</a>
    </div>
    </div>


<div class="card dash-card" style="width: 18rem;">
  <img class="card-img-top" src="/images/moods.png" alt="Imagem de capa do card">
  <div class="card-body">
    <h5 class="card-title">Moods</h5>
    <p class="card-text">
        
    Liquorice topping jelly gingerbread wafer halvah gummi bears. Halvah gummi bears bonbon jelly beans lollipop apple.
</p>
    <a href="#" class="above-admin-btn btn btn-primary">Ver</a>
  </div>
</div>

 <div class="w3-container insights">
        <h5>Insights</h5>
        <p>Novos usuários</p>
        <div class="w3-grey">
        <div class="w3-container w3-center w3-padding insight-pink" style="width:50%">50%</div>

        </div>

        <p>Mapas Astrais Calculados</p>
        <div class="w3-grey">
            <div class="w3-container w3-center w3-padding insight-pale-pink" style="width:25%">25%</div>

        </div>

        <p>Outras análises</p>
        <div class="w3-grey">
            <div class="w3-container w3-center w3-padding insight-purple" style="width:75%">75%</div>
        </div>
    </div>

</div>







</div>
@endsection
