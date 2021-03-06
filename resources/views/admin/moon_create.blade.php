@extends('layouts.dashboard')

@section('content')

<header class="abv-grid">
    <h2>Nova Lua</h2>

    <div class="abv-btn-wrapper">
    <a href="{{route('moons.index')}}" role="button" class="abv-admin-btn">Voltar</a>

    </div>

</header>


<div class="abv-card">
<form class="abv-form-create" method="post" action="{{route('moons.store')}}">
        {{ csrf_field() }}


        <div class="form-group">
            <label for="phase">Fase da Lua:</label>
            <input type="text" class="form-control" id="phase"
                   name="phase" 
                   required>
        </div>

   
                
        <div class="form-group">
            <label for="description">Descrição:</label>
            <textarea rows="10" cols="30" class="form-control" id="description"
                   name="description" 
                   required></textarea>
        </div>
        

       

        <button type="submit" class="abv-admin-send btn btn-primary">Enviar</button>        
    </form>  


        
</div>
@endsection
