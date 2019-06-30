@extends('layouts.admin')

@section('content')


<div class='col-sm-11'>
    <h2> Incluir Planeta </h2>

</div>
<div class='col-sm-1'>
    <a href="{{route('planets.index')}}" class="above-admin-btn btn btn-primary" 
       role="button">Voltar</a>
</div>

<div class='col-sm-12'>

@if (count($errors) > 0)
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif        
    
    <form method="post" action="{{route('planets.store')}}">
        {{ csrf_field() }}

        <div class="form-group">
            <label for="name">Nome do planeta:</label>
            <input type="text" class="form-control" id="name"
                   name="name" 
                   required>
        </div>

   
                
        <div class="form-group">
            <label for="description">Descrição:</label>
            <textarea rows="30" cols="30" class="form-control" id="description"
                   name="description" 
                   required></textarea>
        </div>

        
     



        <button type="submit" class="above-admin-btn btn btn-primary">Enviar</button>        
    </form>    
</div>    


@endsection