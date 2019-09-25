@extends('layouts.dashboard')

@section('content')

<header class="abv-grid">
    <h2>Novo Sentimento</h2>

    <div class="abv-btn-wrapper">
    <a href="{{route('feellings.index')}}" role="button" class="abv-admin-btn">Voltar</a>

    </div>

</header>


<div class="abv-card">
<form class="abv-form-create" method="post" action="{{route('feellings.store')}}">
        {{ csrf_field() }}


        <div class="form-group">
            <label for="name">Nome do sentimento:</label>
            <input type="text" class="form-control" id="name"
                   name="name" 
                   required>
        </div>

   
      
        
     



        <button type="submit" class="abv-btn btn btn-primary">Enviar</button>        
    </form>  
        
</div>
@endsection
