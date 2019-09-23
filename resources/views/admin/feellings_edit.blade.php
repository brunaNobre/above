@extends('layouts.dashboard')

@section('content')


<div class='col-sm-11'>
    <h2 class="sec-title"> Alterar Sentimento </h2>
</div>
<div class='col-sm-1 go-back-button'>
    <a href="{{route( feellings.index')}}" class="above-admin-btn btn btn-primary" 
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
    
    <form method="post" action="{{route( feellings.update',  feelling->id)}}">
    {!! method_field('put') !!}
        {{ csrf_field() }}

        <div class="form-group">
            <label for="name">Nome do Sentimento:</label>
            <input type="text" class="form-control" id="name"
                   name="name" 
                   value="{{ feelling->name}}"
                   required>
        </div> 



        <button type="submit" class="above-admin-btn btn btn-primary">Enviar</button>        
    </form>    
</div>    


@endsection