@extends('layouts.dashboard')

@section('content')

<header class="abv-grid">
    <h2>Novo Signo</h2>

    <div class="abv-btn-wrapper">
    <a href="{{route('signs.index')}}" role="button" class="abv-admin-btn">Voltar</a>

    </div>

</header>


<div class="abv-card">
<form class="abv-form-create" method="post" action="{{route('signs.store')}}">
        {{ csrf_field() }}


        <div class="form-group">
            <label for="name">Nome do Signo:</label>
            <input type="text" class="form-control" id="name"
                   name="name" 
                   required>
        </div>

   
                
        <div class="form-group">
            <label for="description">Descrição:</label>
            <textarea rows="10" cols="30" class="form-control" id="description"
                   name="description" 
                   required></textarea>
        </div>
        
     



        <button type="submit" class="abv-btn btn btn-primary">Enviar</button>        
    </form>  
        
</div>
@endsection
