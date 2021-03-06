@extends('layouts.dashboard')

@section('content')


<header class="abv-grid">
    <h2>Alterar Sentimento</h2>

    <div class="abv-btn-wrapper">
    <a href="{{route('feellings.index')}}" role="button" class="abv-admin-btn">Voltar</a>

    </div>

</header>


<div class="abv-card">
<form class="abv-form-create" method="post" action="{{route('feellings.update', $feelling->id)}}">
    {!! method_field('put') !!}

        {{ csrf_field() }}


        <div class="form-group">
            <label for="name">Nome do sentimento:</label>
            <input type="text" class="form-control" id="name"
                   name="name"
                   value="{{$feelling->name}}" 
                   required>
        </div>

   
      
        
     



        <button type="submit" class="abv-btn btn btn-primary">Enviar</button>        
    </form>  
        
</div>

@endsection